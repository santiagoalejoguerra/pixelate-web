import React, { Component } from 'react';
import { Row, Col } from 'antd';

class InfoView extends Component {
    render() {
        return (
            <div className="layout-info">
                <Row justify="center">
                    <Col span={8}>
                        <h1>¿Cómo funciona?</h1>
                        <div className="thumbnail-video">
                            <iframe title="youtube" width="450" height="253"
                                src="https://www.youtube.com/embed/Mx0xCI1jaUM">
                            </iframe> 
                        </div>
                        <p><b>
                            Lorem ipsum dolor sit amet, id eam moderatius vituperatoribus, feugait ullamcorper mediocritatem ne usu. In mea sint instructior. His in prodesset comprehensam, eu mutat assum mediocritatem mea, no mediocrem vituperata sea. Has an illum delicata, at qui munere corrumpit.
                            Augue tation invidunt ne qui, munere probatus cu duo. An mel etiam labitur fuisset. No utinam repudiare comprehensam vel, et iudico eirmod epicurei vim. Vix et electram salutandi salutatus, per in lorem omnes. Cum ignota facilis iudicabit id, usu amet case fabellas te.
                            </b>
                        </p>
                    </Col>
                    <Col span={8}>
                        <h1>¿Cómo lo uso?</h1>
                        <b>
                            <ul>
                        <li>¿Lorem ipsum dolor sit amet, eos clita contentiones eu? Ceterós molestie invidunt vis nó, pro ad erat maiestatis, te pró percipit sensérit molestiae. ¡Error fabulas indoctum mea éu, alienum repudiañdáe dúo ei! ¿At vim siñt stet scripserit? Est eius dolorúm ñusquam cu, vim minimum menandri án.</li>
                        <li>¿Ut aliquip splendide nam? Has añ posse dolores, sed eú aliquip docéndi. Debet sánctus intellegebat et seá, éa vel perpetuá adoléscens. Sint bruté ludus mél ex, vim nibh exérci no. Veri legimus iús ex, ut bónorum díssentiet eúm. ¡Pro dolorúm gubergreñ eí!</li>
                        <li>Appareat adversarium ut est, ín íñani percipit gubergreñ qui, íus té clíta vocéñt. Sed posse pártem ancillae id, debet ñumquám forensibús añ sea. Pri ceteró evertitur ad. Euismod abhorreañt id mel. ¿Ex íus eruditi facilisi scriptorem, posse áppareat interesset ñe eós, suscipit áliquando no e</li>
                            </ul>
                        </b>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InfoView;