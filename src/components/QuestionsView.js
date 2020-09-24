import React, { Component } from 'react';
import { Row, Col, Collapse } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const questionsList = [
    {
        question: "¿Primera pregunta?",
        response: "¿Lorem ipsum dolor sit amet, eos clita contentiones eu? Ceterós molestie invidunt vis nó, pro ad erat maiestatis, te pró percipit sensérit molestiae. ¡Error fabulas indoctum mea éu, alienum repudiañdáe dúo ei! ¿At vim siñt stet scripserit? Est eius dolorúm ñusquam cu, vim minimum menandri án."
    },
    {
        question: "¿Segunda pregunta?",
        response: "¿Ut aliquip splendide nam? Has añ posse dolores, sed eú aliquip docéndi. Debet sánctus intellegebat et seá, éa vel perpetuá adoléscens. Sint bruté ludus mél ex, vim nibh exérci no. Veri legimus iús ex, ut bónorum díssentiet eúm. ¡Pro dolorúm gubergreñ eí!"
    },
    {
        question: "¿Tercera pregunta?",
        response: "¡At nóluisse verterem eam, éa cúm perpetúa percipitur! ¡Dóming labore coñclusíonemque mei in, añ sed ludus percipit! Nam hárum atomorum id, ei recusábo sapiéntem posidoñiúm pri, labóres dissentiunt iús te. ¿At sit facílisis íudicabit, vírtute abhorreant no éos, idque legere mediocrem te per? ¿Purto dolore et dúo, mea ex legere iudicábit definiebas? ¿Né idque prompta abhorreant his, dolór sensibus persequeris nó vel? An his dicam quidam maluisset, ipsum euismod ei est."
    },
    {
        question: "¿Cuarta pregunta?",
        response: "¿Lorem ipsum dolor sit amet, eos clita contentiones eu? Ceterós molestie invidunt vis nó, pro ad erat maiestatis, te pró percipit sensérit molestiae. ¡Error fabulas indoctum mea éu, alienum repudiañdáe dúo ei! ¿At vim siñt stet scripserit? Est eius dolorúm ñusquam cu, vim minimum menandri án."
    },
    {
        question: "¿Quinta pregunta?",
        response: "¿Ut aliquip splendide nam? Has añ posse dolores, sed eú aliquip docéndi. Debet sánctus intellegebat et seá, éa vel perpetuá adoléscens. Sint bruté ludus mél ex, vim nibh exérci no. Veri legimus iús ex, ut bónorum díssentiet eúm. ¡Pro dolorúm gubergreñ eí!"
    },
    {
        question: "¿Sexta pregunta?",
        response: "¡At nóluisse verterem eam, éa cúm perpetúa percipitur! ¡Dóming labore coñclusíonemque mei in, añ sed ludus percipit! Nam hárum atomorum id, ei recusábo sapiéntem posidoñiúm pri, labóres dissentiunt iús te. ¿At sit facílisis íudicabit, vírtute abhorreant no éos, idque legere mediocrem te per? ¿Purto dolore et dúo, mea ex legere iudicábit definiebas? ¿Né idque prompta abhorreant his, dolór sensibus persequeris nó vel? An his dicam quidam maluisset, ipsum euismod ei est."
    }
]

class QuestionsView extends Component {
    render() {
        return (
            <div className="layout-questions">
                <Row justify="center">
                    <Col span={16}>
                        <h1>Preguntas</h1>
                        <Collapse 
                            ghost 
                            accordion
                            expandIcon={({ isActive }) => <QuestionCircleOutlined rotate={isActive ? 0 : 180} />} >
                                {
                                    questionsList.map((q, index) => <Panel header={q.question} key={index}><p>{q.response}</p></Panel>)
                                }

                        </Collapse>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QuestionsView;