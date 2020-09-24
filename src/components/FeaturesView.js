import React, { Component } from 'react';
import { Col, Row } from 'antd';

import loremImage from '../images/lorem.jpg';

const featuresList = [
    {
        image: loremImage,
        feature: "Lorem ipsum dolor sit amet, reque harum nominati no vim. Noster timeam alterum at vix, ne pri inermis ponderum, alii honestatis ex eos. Eam eu brute libris verterem, vituperata definitiones mel id, wisi graece tractatos ea nam. Percipitur voluptatibus mel cu. Dicunt dolores epicurei in cum, movet nusquam mediocritatem nec te, ea ridens animal nec. Eam iriure inciderint ad, etiam luptatum te duo."
    },
    {
        image: loremImage,
        feature: "Quas deserunt tincidunt sea te, ei nam esse posse phaedrum, purto offendit signiferumque at vix. Alterum postulant nam ea. No vidit minimum mea. Pri in sanctus mediocrem, sea wisi sonet definitionem at, vis no zril essent. Perfecto temporibus mediocritatem ei mea. Sed iudico iriure ea, erant ocurreret abhorreant eu sed."
    },
    {
        image: loremImage,
        feature: "Movet solet quidam pro ex, sit quem lobortis et, ei mea debet erroribus efficiendi. Malorum sensibus no pri, tantas eripuit explicari eu pri. Ad vim veniam periculis, vim ne iusto aliquam intellegebat. Hinc audire pertinacia et eam, sed partiendo cotidieque intellegebat at, id pri cetero euripidis concludaturque. Eu albucius quaerendum vis, no iusto argumentum est. Te ius officiis neglegentur, est virtute dignissim gloriatur ei."
    },
    {
        image: loremImage,
        feature: "Ne illud appareat posidonium sit, cum prompta reprimique ne, ad nam postea labitur similique. Solum libris corpora ad mel, sea erant iuvaret voluptatum cu, ut sint paulo vel. Quidam deleniti atomorum cu vis, quo eius inciderint ut. Elitr ignota ut cum, mel an etiam verear option, ne pri illum exerci adipisci. In verterem suavitate usu. Eum aliquam recteque constituto an, mei te adhuc dictas."
    }
]

class FeaturesView extends Component {
    render() {
        return (
            <div className="layout-features">
                <Row justify="center">
                    <Col span={16}>
                        <h1>Características</h1>
                        {
                            featuresList.map((f, index) =>
                                <div key={index}>
                                    <Row justify="center" align="middle">
                                        <Col span={6}>
                                            <img src={f.image} alt="characteres" />
                                        </Col>
                                        <Col span={18}>
                                            <p>
                                            {f.feature}
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default FeaturesView;