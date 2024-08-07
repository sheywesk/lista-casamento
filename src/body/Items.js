import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Popup from '../popup/Popup';
import './Items.css';
import taxaCondominio from '../assets/images/boleto.png'
import jantar from '../assets/images/jantar.jpg'
import aposentadoria from '../assets/images/aposentadoria.png'
import panela_pressao from '../assets/images/panela_pressao.jpg'
import porto_galinhas from '../assets/images/porto_galinhas.jpeg'

const items = [
    { id: 1, name: 'Jantar', description: 'Jantar em campos do jordão', value: 'R$ 500,00', src: jantar, qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 2, name: 'Aposentadoria', description: 'Aposentadoria do casal', value: 'R$ 2000,00', src: aposentadoria, qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 3, name: 'cueca', description: 'Cueca sexy para noite de núpcias', value: 'R$ 90,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/cueca_superman.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 4, name: 'Conjunto de taças', description: 'Conjunto de taças', value: 'R$ 150,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/shopping-extra/Conjunto_de_Tacas_para_Champanhe_Luigi_Bormioli.jpeg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 5, name: 'Controles remotos', description: 'Controles remotos para evitar briga', value: 'R$ 100,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/controles_remotos.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 6, name: 'Churrasqueira elétrica', description: 'Churrasqueira elétrica', value: 'R$ 280,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/churrasqueira-eletrica-inox.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 7, name: 'Champanhe', description: 'Champanhe para brindar a lua de mel', value: 'R$ 180,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/Gramado/champagne.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 8, name: 'Capacete', description: 'Capacete contra rolo de macarrão para o noivo', value: 'R$ 260,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/capacete.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 9, name: 'Taxa', description: 'Taxa do condomínio', value: 'R$ 350,00', src: taxaCondominio, qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 10, name: 'Panela de pressão', description: 'Panela de pressão', value: 'R$ 210,00', src: panela_pressao, qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 11, name: 'Adega de vinhos', description: 'Adega de vinhos', value: 'R$ 700,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/adega-de-vinhos-termoeletrica.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 12, name: 'Café da manhã', description: 'Pão de queijo com café no aeroporto', value: 'R$ 130,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/dados/sitenoivos/wed602071/presentes/5BTrx_1673773186.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 13, name: 'Porto de galinhas', description: 'Final de semana em Porto de galinhas', value: 'R$ 200,00', src: porto_galinhas, qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 14, name: 'Batedeira', description: 'Batedeira para o bolinho de fds', value: 'R$ 230,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/batedeira-preta-inox-220v.jpg", qrcode: "00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
];

const Items = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleButtonClick = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                {items.map((item) => (
                    <Col key={item.id} xs={12} md={4} className="mb-4">
                        <div className="custom-card">
                            <img src={item.src} alt={item.name} className="card-image" />
                            <div className="card-description">{item.description}</div>
                            <div className="card-value">{item.value}</div>
                            <button className="custom-button" onClick={() => handleButtonClick(item)}>
                                Faz o pix, bença !
                            </button>
                        </div>
                    </Col>
                ))}
            </Row>
            {selectedItem && (
                <Popup show={showPopup} handleClose={handleClosePopup} item={selectedItem} />
            )}
        </Container>
    );
}

export default Items;