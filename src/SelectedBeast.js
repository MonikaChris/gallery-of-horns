import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                </Modal.Header>
                <img src={this.props.beast.image_url} alt={this.props.beast.title} /> 
                <Modal.Body>{this.props.beast.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        )
    }
}

export default SelectedBeast;

