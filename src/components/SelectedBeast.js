import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {

    handleClose = () =>{
        this.props.handleClose();
    }

    render() {
        return (
            <>

                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                        <img variant="top" src={this.props.src} onClick={this.incrementNumberOfVotes}/>
                        <p> {this.props.description};</p>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </>
        )
    }
}

export default SelectedBeast;