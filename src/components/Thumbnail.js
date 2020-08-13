import React, { Component } from 'react';
import { Col, Row } from 'antd';

class Thumbnail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

        render() {

            const { images } = this.props;

            return  <Row gutter={[32, 16]} justify="center">
                { 
                    images.map(image => {
                        return <Col span={21}> <img src={image} width="100%"/> </Col>
                    })
                }
            </Row>;

        }
    }

export default Thumbnail;