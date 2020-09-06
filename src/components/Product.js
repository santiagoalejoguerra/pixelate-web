import React, { Component } from 'react';
import imageUtils from '../utils/ImageUtils';

import { Rate, message } from 'antd';
import { Row, Col } from 'antd';
import Thumbnail from './Thumbnail';
import UploaderFileImage from './UploaderFileImage';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import {
    LeftCircleOutlined,
    RightCircleOutlined
} from '@ant-design/icons';

import picture from '../images/britta.png';
import PreviewProduct from './PreviewProduct';

import Walls from '../conf/WallsConfig.js';
import walls from '../conf/WallsConfig.js';

class Product extends Component {

    constructor(props) {
        super(props);

        Walls.map(wall => {
            this.putPictureOnImage(picture, wall);
        });
    }

    state = {
        feature: {
            model: "Square",
            saleCount: "131",
            description: "Cuadro mosaico con foto propia (80x80 cm) / Pixelate modelo Square / Podes regalar a tu familiar, amigo, vecino, ¡o incluso ocupar la pared de tu living!",
            price: "3200",
            botons: Math.pow(80, 2)
        },
        currentImage: 0,
        images: [picture]
    }

    next = () => {
        const currentImage = this.state.currentImage + 1;
        this.setState({ currentImage });
      }
    
    prev = () => {
        const currentImage = this.state.currentImage - 1;
        this.setState({ currentImage });
      }

    changeImage = currentImage => () => {
        console.log(currentImage);
        this.setState({ currentImage });
    } 

    updatePictureOnImageCropped = (pictureCropped, wall) => {

        console.log("updatePictureOnImage", pictureCropped, wall);

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const limit = 300;

        canvas.width = limit;
        canvas.height = limit;

        const crop = pictureCropped.crop;

        const pictureImage = new Image();

        pictureImage.onload = () => {

            const pWidth = pictureImage.width / pictureCropped.image.width;
            const pHeight = pictureImage.height / pictureCropped.image.height;

            ctx.drawImage(
                pictureCropped.image, 
                crop.x * pWidth,
                crop.y * pHeight,
                crop.width * pWidth,
                crop.height * pHeight,
                0,
                0,
                limit,
                limit
                );

            const dataUrl = canvas.toDataURL();

            this.setState({ 
                images: [dataUrl]
            });

            Walls.map(wall => {
                this.putPictureOnImage(dataUrl, wall);
            });

            this.setState({
                updatePicture: dataUrl
            });

        };

        console.log("image", pictureCropped.image);

        pictureImage.src = pictureCropped.image.src;

    }

    putPictureOnImage = (picture, wall) => {

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const wallImage = new Image();

        wallImage.src = wall.file;

        wallImage.onload = () => {

            canvas.width = wallImage.width;
            canvas.height = wallImage.height;

            ctx.drawImage(
                wallImage, 
                0, 
                0, 
                wallImage.width, 
                wallImage.height
                );

            const pictureImage = new Image();

            pictureImage.onload = () => {

                ctx.drawImage(
                    pictureImage, 
                    wall.pictureOn.x, 
                    wall.pictureOn.y, 
                    wall.pictureOn.width, 
                    wall.pictureOn.height
                    );

                const dataUrl = canvas.toDataURL();

                const imagesState = this.state.images;

                imagesState.push(dataUrl);
    
                this.setState({ 
                    images: imagesState
                });

            }

            pictureImage.src = picture;

        };

    }

    onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
      };

    render() {

        const { currentImage, feature, images, updatePicture } = this.state;

        const countBotons = feature.botons;
        const digits = Math.floor(Math.log10(countBotons));
        const zerosDigits = Math.pow(10, digits);
        const unit = Math.floor(countBotons / zerosDigits);
        const final = unit * zerosDigits;

        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        
        return (
            <div className="Product">
                <Row justify="space-around">
                    <Col span={15}>
                        <Row justify="space-around" align="middle" gutter={[48, 32]}>
                            <Col span={4}>
                                <Thumbnail images={images} currentImage={currentImage} onClick={this.changeImage} />
                            </Col>
                            <Col span={20}>
                                <Row justify="space-between" align="middle">
                                    <Col span={1} align="center">
                                        {currentImage > 0 && (
                                            <LeftCircleOutlined style={{ fontSize: '16px' }} onClick={this.prev} />
                                        )}
                                    </Col>
                                    <Col span={22}>   
                                        <PreviewProduct product={updatePicture || picture} images={images} currentImage={currentImage} />
                                    </Col>
                                    <Col span={1} align="center">
                                        {currentImage < images.length - 1 && (
                                            <RightCircleOutlined style={{ fontSize: '16px' }} onClick={this.next} />
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <h4>{feature.model}</h4>
                        <h4>{feature.saleCount} vendidas | <Rate disabled allowHalf defaultValue={4.5} /></h4>
                        <h2>{feature.description}</h2>
                        <h3>Cantidad de botonsitos: +{final}</h3>
                        <h1>${feature.price}</h1>
                        <h5>Iva incluido</h5>

                        <h3>Cargá tu imagen</h3>
                        <Row>
                            <Col>
                                <img src={updatePicture || picture} alt="avatar" style={{ width: '300px' }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <UploaderFileImage  putPictureOnImageCropped={this.updatePictureOnImageCropped} walls={walls}  />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        );
        
    }

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value    
        });

    }

    handleInputChangeFile = (event) => {
        const target = event.target;

        const value = URL.createObjectURL(target.files[0])

        const image = imageUtils.createImage(value);

        image.onload = () => {

            this.setState({
                image: image   
            });

        }

    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }


export default Product;