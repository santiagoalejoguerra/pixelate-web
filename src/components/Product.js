import React, { Component, setState } from 'react';
import imageUtils from '../utils/ImageUtils';

import { Rate } from 'antd';
import { Row, Col } from 'antd';
import Thumbnail from './Thumbnail';

import {
    LeftCircleOutlined,
    RightCircleOutlined
} from '@ant-design/icons';

import britta from '../images/britta.png';

class Product extends Component {

    state = {
        feature: {
            model: "Square",
            saleCount: "131",
            description: "Cuadro mosaico con foto propia (80x80 cm) / Pixelate modelo Square / Podes regalar a tu familiar, amigo, vecino, ¡o incluso ocupar la pared de tu living!",
            price: "3200",
            botons: Math.pow(80, 2)
        },
        currentImage: 0,
        prueba: 'Pruebita'
    }

    next = () => {
        const currentImage = this.state.currentImage + 1;
        this.setState({ currentImage });
      }
    
      prev = () => {
        const currentImage = this.state.currentImage - 1;
        this.setState({ currentImage });
      }

    render() {

        const { prueba, currentImage, feature } = this.state;

        const countBotons = feature.botons;
        const digits = Math.floor(Math.log10(countBotons));
        const zerosDigits = Math.pow(10, digits);
        const unit = Math.floor(countBotons / zerosDigits);
        const final = unit * zerosDigits;

        console.log(countBotons, digits, unit, zerosDigits, final);

        const images = [ britta, britta ];
        
        return (
            <div className="Product">
                <Row justify="space-around" gutter={[48, 32]}>
                    <Col span={15}>
                        <Row justify="space-around" align="middle" gutter={[48, 32]}>
                            <Col span={4}>
                                <Thumbnail images={images} currentImage={currentImage}/>
                            </Col>
                            <Col span={20}>
                                <Row justify="space-between" align="middle">
                                    <Col span={1} align="center">
                                        {currentImage > 0 && (
                                            <LeftCircleOutlined style={{ fontSize: '16px' }} onClick={this.prev} />
                                        )}
                                    </Col>
                                    <Col span={22}>   
                                        <img src={images[currentImage]} width="100%"/>
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

}


export default Product;