import React, { Component } from 'react';

import demo from '../images/demo.jpeg';
import { Col, Row, Button, Upload, Tabs } from 'antd';

import { PictureOutlined, FormatPainterOutlined, DragOutlined, BgColorsOutlined, CameraOutlined } from '@ant-design/icons';

class ProductView extends Component {

    initCanvas = element => {

        const canvas = element;
        const ctx = canvas.getContext('2d');

        const image = new Image();

        image.onload = () => {

            ctx.drawImage(
                image,
                0, 0,
                500, 500
            );

        }

        image.src = demo;

    }

    render() {
        return (
            <div className="layout-product">
                <Row justify="center">
                    <Col span={16}>
                        <h1>Liberá tu imaginación</h1>
                        <div className="product">
                            <Row justify="space-around" gutter={[16, 16]}>
                                <Col span={12}>
                                    <div className="tools-view">
                                        <Tabs type="card" centered size="large">
                                            <Tabs.TabPane tab={<PictureOutlined />} key="1">
                                            Content of Tab Pane 1
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={<FormatPainterOutlined />} key="2">
                                            Content of Tab Pane 2
                                            </Tabs.TabPane>
                                            <Tabs.TabPane tab={<DragOutlined />} key="3">
                                            Content of Tab Pane 3
                                            </Tabs.TabPane>
                                        </Tabs>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <canvas ref={this.initCanvas} className="product-view-canvas" width={500} height={500}>
                                        <img src={demo} width="40%" alt="" />
                                    </canvas>
                                </Col>
                            </Row>
                            
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductView;