import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Popup from '../popup/Popup';
import './Items.css'; 
import bebe from '../assets/images/bebe.jpg'
import jantar from '../assets/images/jantar.jpg'
import aposentadoria from '../assets/images/aposentadoria.png'
const items = [
    { id: 1, name: 'Alugel de bebe', description: 'Aluguel de bebê para treinamento', value: 'R$ 250,00', src: bebe,qrcode:"00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 2, name: 'Jantar', description: 'Jantar em campos do jordão', value: 'R$ 500,00', src: jantar, qrcode:"00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 2, name: 'Aposentadoria', description: 'Aposentadoria do casal', value: 'R$ 2000,00', src: aposentadoria,qrcode:"00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63" },
    { id: 2, name: 'cueca', description: 'Cueca sexy para noite de núpcias', value: 'R$ 90,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/cueca_superman.jpg",qrcode:"00020126580014BR.GOV.BCB.PIX013676a8a9a8-4cfd-4cd0-b3b9-9e85657e8a5e5204000053039865406150.005802BR5925SHEYWESK CEZARIO DE MEDEI6011JOAO PESSOA62250521f8KeoTtWSK4RcAU99JlL063040A63"},
    // Adicione mais itens conforme necessário
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