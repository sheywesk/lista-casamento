import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Popup from '../popup/Popup';
import './Items.css';
import taxaCondominio from '../assets/images/boleto.png'
import jantar from '../assets/images/jantar.jpg'
import aposentadoria from '../assets/images/aposentadoria.png'
import panela_pressao from '../assets/images/panela_pressao.jpg'
import porto_galinhas from '../assets/images/porto_galinhas.jpeg'
import toalhas from '../assets/images/toalhas.jpeg'
import cafeteira from '../assets/images/cafeteira.jpeg'

const items = [
    { id: 1, name: 'Jantar', description: 'Jantar em campos do jordão', value: 'R$ 500,00', src: jantar, qrcode: "00020101021126660014br.gov.bcb.pix0114+55839821173400226Jantar em Campos do Jordao5204000053039865406500.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304FF85" },
    { id: 2, name: 'Aposentadoria', description: 'Aposentadoria do casal', value: 'R$ 2000,00', src: aposentadoria, qrcode: "00020101021126620014br.gov.bcb.pix0114+55839821173400222Aposentadoria do casal52040000530398654072000.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***630468FC" },
    { id: 3, name: 'cueca', description: 'Cueca sexy para noite de núpcias', value: 'R$ 90,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/cueca_superman.jpg", qrcode: "00020101021126500014br.gov.bcb.pix0114+55839821173400210Cueca sexy520400005303986540590.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304236A" },
    { id: 4, name: 'Conjunto de taças', description: 'Conjunto de taças', value: 'R$ 150,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/shopping-extra/Conjunto_de_Tacas_para_Champanhe_Luigi_Bormioli.jpeg", qrcode: "00020101021126570014br.gov.bcb.pix0114+55839821173400217Conjunto de tacas5204000053039865406150.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***63045107" },
    { id: 5, name: 'Controles remotos', description: 'Controles remotos para evitar briga', value: 'R$ 100,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/controles_remotos.jpg", qrcode: "00020101021126550014br.gov.bcb.pix0114+55839821173400215Controle remoto5204000053039865406100.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304E9CD" },
    { id: 6, name: 'Churrasqueira elétrica', description: 'Churrasqueira elétrica', value: 'R$ 280,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/churrasqueira-eletrica-inox.jpg", qrcode: "00020101021126620014br.gov.bcb.pix0114+55839821173400222Churrasqueira eletrica5204000053039865406280.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304D43F" },
    { id: 7, name: 'Champanhe', description: 'Champanhe para brindar a lua de mel', value: 'R$ 180,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/Gramado/champagne.jpg", qrcode: "00020101021126600014br.gov.bcb.pix0114+55839821173400220Champanhe lua de mel5204000053039865406180.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***630480BA" },
    { id: 8, name: 'Capacete', description: 'Capacete contra rolo de macarrão para o noivo', value: 'R$ 80,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/capacete.jpg", qrcode: "00020101021126480014br.gov.bcb.pix0114+55839821173400208Capacete520400005303986540580.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304108C" },
    { id: 9, name: 'Taxa', description: 'Taxa do condomínio', value: 'R$ 350,00', src: taxaCondominio, qrcode: "00020101021126580014br.gov.bcb.pix0114+55839821173400218Taxa de condominio5204000053039865406350.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304A80F" },
    { id: 10, name: 'Panela de pressão', description: 'Panela de pressão', value: 'R$ 210,00', src: panela_pressao, qrcode: "00020101021126570014br.gov.bcb.pix0114+55839821173400217Panela de pressao5204000053039865406210.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***63044B54" },
    { id: 11, name: 'Adega de vinhos', description: 'Adega de vinhos', value: 'R$ 700,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/adega-de-vinhos-termoeletrica.jpg", qrcode: "00020101021126540014br.gov.bcb.pix0114+55839821173400214Adega de vinho5204000053039865406700.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***63043FBA" },
    { id: 12, name: 'Café da manhã', description: 'Pão de queijo com café no aeroporto', value: 'R$ 130,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/dados/sitenoivos/wed602071/presentes/5BTrx_1673773186.jpg", qrcode: "00020101021126540014br.gov.bcb.pix0114+55839821173400214Cafe aeroporto5204000053039865406130.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304641B" },
    { id: 13, name: 'Porto de galinhas', description: 'Final de semana em Porto de galinhas', value: 'R$ 200,00', src: porto_galinhas, qrcode: "00020101021126570014br.gov.bcb.pix0114+55839821173400217Porto de galinhas5204000053039865406200.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***63041BA2" },
    { id: 14, name: 'Batedeira', description: 'Batedeira para o bolinho de fds', value: 'R$ 230,00', src: "https://cdn-assets-legacy.casar.com/thumb/208x208x1/img/presentes/batedeira-preta-inox-220v.jpg", qrcode: "00020101021126490014br.gov.bcb.pix0114+55839821173400209Batedeira5204000053039865406230.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304CE2D" },
    { id: 15, name: 'Toalhas', description: 'Conjunto de toalhas', value: 'R$ 70,00', src: toalhas, qrcode: "00020101021126460014br.gov.bcb.pix0114+55839821173400206Toalha520400005303986540570.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***6304D3A1" },
    { id: 16, name: 'cafeteira', description: 'Cafeteira', value: 'R$ 300,00', src: toalhas, qrcode: "00020101021126490014br.gov.bcb.pix0114+55839821173400209Cafeteira5204000053039865406300.005802BR5919RITA DE C N DA CRUZ6011JOAO PESSOA62070503***63049F03" },
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
                                Presentear
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