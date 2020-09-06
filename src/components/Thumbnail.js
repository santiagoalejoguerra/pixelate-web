import React, { Component } from 'react';
import { Col, Row } from 'antd';

class Thumbnail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        const { images, currentImage, onClick } = this.props;

        return  <Row gutter={[32, 16]} justify="center">
            { 
                images.map((image, index) => {

                    const activeCss =  (currentImage === index) ? 'active' : '';

                    return <Col span={21} key={index}> 
                        <img src={image} width="100%" className={"thumbnail " + activeCss} onClick={onClick(index)} /> 
                    </Col>
                })
            }
        </Row>;

    }
}

export default Thumbnail;