import React, { Component, Fragment } from 'react';
import { Button, message, Modal } from 'antd';
import imageUtils from '../utils/ImageUtils';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Image from './Image';

class UploaderFileImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            loading: false,
            imageUrl: undefined
        };
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
      };

    handleOk  = e => {

      const walls = this.props.walls;

      this.props.putPictureOnImageCropped(this.state.imgCropped, walls[0]);

      console.log("handle OK");

        this.setState({
            modalVisible: false,
        });
      };
    
    handleCancel = e => {
        this.setState({
            modalVisible: false,
        });
      };

      handleInputChangeFile = (event) => {
        const target = event.target;

        const value = URL.createObjectURL(target.files[0])

        const image = imageUtils.createImage(value);

        image.onload = () => {

            this.setState({
              imageUrl: image   
            });

        }

    }

    callbackImgCropped = (imgCropped) => {

      this.setState({ imgCropped });

    }

    render() {

        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );

        const { imageUrl } = this.state;

        const { onFinalizeOK, onFinalizeCancel } = this.props;

        return  <Fragment>
            <Button type="primary" onClick={this.showModal}>
                Subir imagen
            </Button>

            <Modal
                title="Imagen previsual"
                visible={this.state.modalVisible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                {/* <Button type="primary"  onClick={this.showModal}>
                    Subir archivo
                </Button> */}

                {imageUrl ? 
                  <Image 
                    src={imageUrl.src} 
                    callbackImgCropped={this.callbackImgCropped} 
                    alt="preview" 
                    style={{ width: '100%' }} 
                  /> : 
                  <label className="custom-file-upload">
                    <input     
                      name="file" type="file"
                      accept="image/*"
                      onChange={this.handleInputChangeFile} />
                        {uploadButton}
                  </label> 
                }
            </Modal>

        </Fragment>

    }
}

export default UploaderFileImage;