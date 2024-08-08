import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import './Popup.css';
import qrcodeImage from '../assets/images/pix.png'
const Popup = ({ show, handleClose, item }) => {
    const qrImage = qrcodeImage; // URL da imagem do QR code
    const qrText = item.qrcode; // Texto do PIX
    console.log(qrText)
    const handleCopy = () => {
        navigator.clipboard.writeText(qrText);
        alert('QR Code copiado!');
    };

    return (
        <Modal 
            isOpen={show} 
            onRequestClose={handleClose} 
            contentLabel="QR Code"
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <div className="modal-content">
                <h2>{item.name}</h2>
                <img src={qrImage} alt="QR Code" className="qr-image" />
                <div className="text-center mt-4">
                    <Button variant="primary" onClick={handleCopy} className="custom-button">Pix copia e cola - Clique aqui</Button>
                </div>
                <Button variant="secondary" onClick={handleClose} className="mt-4 custom-button">Fechar</Button>
            </div>
        </Modal>
    );
}

export default Popup;