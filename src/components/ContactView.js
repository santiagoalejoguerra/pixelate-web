import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'antd';

import { UserOutlined, MailOutlined, PhoneOutlined, FormOutlined } from '@ant-design/icons';

class ContactView extends Component {
    render() {
        return (
            <div className="layout-contact">
                <Row justify="center">
                    <Col span={16}>
                        <h1>Contacto</h1>
                        <Row justify="space-around" gutter={[16, 16]}>
                            <Col span={8}>
                                <Input placeholder="Nombre" prefix={<UserOutlined />} />
                            </Col>
                            <Col span={8}>
                                <Input placeholder="Mail" prefix={<MailOutlined />} />
                            </Col>
                            <Col span={8}>
                                <Input placeholder="Teléfono" prefix={<PhoneOutlined />} />
                            </Col>
                            <Col span={24}>
                                <Input.TextArea 
                                    placeholder="Comentario" 
                                    prefix={<FormOutlined />} 
                                    autoSize={{ minRows: 5, maxRows: 8 }}/>
                            </Col>
                            <Col span={24}>
                                <Button className="button-contact" type="primary" block>
                                    Enviar
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactView;