import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

// will need to refactor this
class ModalContent extends Component {
	

	onClose = () =>{
		this.props.onResponse(false);
		return false; // addition
	}
	delete = () =>{
		this.props.onDelete(this.props.rowToEdit, this.props.iRowToEdit);
	}
	
	

	render() {
		//if (!this.props.isOpen) {
		//	return null;
		//} else {
			return ReactDOM.createPortal(
				<aside>
					<Modal
        				show={this.props.isOpen}
        				onHide={this.onClose}
					
					>
						<Modal.Header closeButton onClick={this.onClose}>
							<Modal.Title>Delete Row</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<p>Are you sure you want to delete this row?</p>
							<p>{this.props.rowToEdit}</p>
						</Modal.Body>

						<Modal.Footer>
							<Button variant="secondary" onClick={this.onClose}>cancel</Button>
							<Button variant="danger" onClick={this.delete}>delete</Button>
						</Modal.Footer>
		
					</Modal>
				</aside>,
				document.body
			);
		//}

	}
}
export default ModalContent;