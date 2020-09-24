import React, { Component } from 'react';

import { Anchor, BackTop, Col, Layout, Row } from 'antd';

import './css/Home.css';
import ProductView from './ProductView';
import InfoView from './InfoView';
import QuestionsView from './QuestionsView';
import FeaturesView from './FeaturesView';
import ContactView from './ContactView';

const { Header, Content, Footer } = Layout;

class Home extends Component {

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value    
        });

    }

    render() {
        
        return (
            <Layout>
                <BackTop />
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', textAlign: 'center' }}>
                    <Row justify="center">
                        <Col span={4}>
                            <div className="logo" />
                        </Col>
                        <Col span={18}>
                            <Anchor targetOffset={63}>
                                <Row justify="center">
                                    <Col span={4}>
                                    <Anchor.Link href="#home" title="Inicio" />
                                    </Col>
                                    <Col span={4}>
                                    <Anchor.Link href="#info" title="Información" />                             
                                    </Col>
                                    <Col span={4}>
                                    <Anchor.Link href="#questions" title="Preguntas" />         
                                    </Col>
                                    <Col span={4}>
                                    <Anchor.Link href="#features" title="Características" />    
                                    </Col>
                                    <Col span={4}>
                                    <Anchor.Link href="#contact" title="Contacto" />           
                                    </Col>
                                </Row>
                            </Anchor>
                        </Col>
                    </Row>
                </Header>
                <Content className="site-layout" style={{ marginTop: 64 }}>
                    <section id="home" className="site-layout-product-background primaryTheme">
                        <ProductView />
                    </section>
                    <section id="info" className="site-layout-info-background secondaryTheme">
                        <InfoView />
                    </section>
                    <section id="questions" className="site-layout-questions-background primaryTheme">
                        <QuestionsView />
                    </section>
                    <section id="features" className="site-layout-features-background secondaryTheme">
                        <FeaturesView />
                    </section>
                    <section id="contact" className="site-layout-contact-background primaryTheme">
                        <ContactView />
                    </section>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Pixelate ©2020 Creado por Streetview</Footer>
            </Layout>
        );
        
    }
}


export default Home;