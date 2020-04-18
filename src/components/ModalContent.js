import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

// will need to refactor this
class ModalContent extends Component {

	onClose = () =>{
		this.props.testCancel(false);
	}
	delete = () =>{
		this.props.onDelete(this.props.rowToEdit, this.props.iRowToEdit);
}

	render() {
		if (!this.props.test) {
			return null;
		} else {
			return ReactDOM.createPortal(
				<aside>
					<Modal.Dialog className="modalLoc">
						<Modal.Header closeButton onClick={this.onClose}>
							<Modal.Title>Delete Row</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<p>Modal body text goes here.</p>
						</Modal.Body>

						<Modal.Footer>
							<Button variant="secondary" onClick={this.onClose}>Close</Button>
							<Button variant="primary" onClick={this.delete}>Save changes</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</aside>,
				document.body
			);
		}

	}
}
export default ModalContent;