import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Table } from 'react-bootstrap';
import Footer from './Footer';
import ModBody from './ModBody';

// will need to refactor this

class ModalContent extends Component {
	constructor(props){
		super(props);
		//this.setTitle = this.setTitle.bind(this);
		this.state = {
			title: '',
			message: null,
			selectRow: this.props.selectRow
	
		}
		this.handleChange = this.handleChange.bind(this);

	}
	componentDidMount(){
		this.setTitle();
	}
	

	/*componentDidUpdate(prevProps){
		if(this.props.isOpen !== prevProps.isOpen){
			this.setTitle();
		}
	}*/


	handleChange(event){ 
	
		const {selectRow} = {...this.state};
		const currentState = selectRow;
		const {name, value} = event.target;
		currentState[name] = value;
		this.setState({selectRow: currentState});
	}
	
	// sets the state for Modal depending on whether the user clicked 
	// edit or delete button
	setTitle(){
		
		console.log(this.state.selectRow);
		if(this.props.title === "edit") {
			this.setState({
				title: "Edit Row",
				message: null,
			});
		} else if (this.props.title === "delete"){
			this.setState({
				title: "Delete Row", 
				message: "Are you sure you want to delete this row?",
			});
		}
	}

	// tells parent App.js to close the Modal
	onClose = () => {
		this.props.onResponse();

	}

	// tells parent App.js to delete the row
	delete = () => {
		this.props.onDelete(this.props.rowToEdit, this.props.iRowToEdit);
	}

	// tells parent App.js to edit the row
	edit = () => {
		const newRow = Object.create(this.state.selectRow);
		this.props.onEdit(this.props.rowToEdit, this.props.iRowToEdit, newRow);
	}

	// need to refactor
	render() {
		return ReactDOM.createPortal(
			<aside>
				<Modal
					show={this.props.isOpen}
					onHide={this.onClose}
				>
					<Modal.Header closeButton onClick={this.onClose}>
						<Modal.Title>{this.state.title}</Modal.Title>
					</Modal.Header>
							
					<ModBody
						title={this.props.title}
						selectRow={this.state.selectRow}
						handleChange={this.handleChange}
						message={this.state.message}
					/>
					<Footer 
						onClose={this.onClose} 
						edit={this.edit} 
						delete={this.delete}
						title={this.props.title} 
					/>	
				</Modal>
					
			</aside>,
			document.body
		);

	} 
} 


export default ModalContent;