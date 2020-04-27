import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Table } from 'react-bootstrap';
import ControlledInput from './ControlledInput';

//function BaseModal(props){
const BaseModal = (props) => {	
	return(
		<Modal
			show={props.isOpen}
			onHide={props.onClose}>
			<Modal.Header closeButton onClick={props.onClose}>
	{/*<Modal.Title>{props.title}</Modal.Title>*/}
			</Modal.Header>
				{props.children}

		</Modal>
	);
	

}

// will need to refactor this

class ModalContent extends Component {
	constructor(props){
		super(props);
		//this.setTitle = this.setTitle.bind(this);
		this.testChange = this.testChange.bind(this);
		this.state = {
			title: '',
			message: null,
			selectRow: [],
			mBody: null,  // Modal Body
			test: "test"
	
		}
		this.handleChange = this.handleChange.bind(this);
		this.testChange = this.testChange.bind(this);
	}
	

	componentDidUpdate(prevProps){
		//console.log("update called ")
		if(this.props.isOpen !== prevProps.isOpen){
			//this.setState({selectRow: this.props.selectRow});
			this.setTitle();
		}
	}
	// fixes the initial selectRow
	componentWillReceiveProps(nextProps){
		/*console.log("current")
		console.log(this.props.selectRow);
		console.log("nextProps")
		console.log(nextProps.selectRow)*/
		if(this.props.selectRow !== nextProps.selectRow){
			this.setState({selectRow: nextProps.selectRow, test: "another test"});
		
		}
	}

	handleChange(event){ 
		// not working
		const {selectRow} = {...this.state};
		const currentState = selectRow;
		const {name, value} = event.target;
		currentState[name] = value;
		this.setState({selectRow: currentState});
		//this.setState({...this.state.selectRow, name: event.target.value});
		
	
	}
	testChange(event){
		this.setState({test: event.target.value});
	}
	

	setTitle(){
		
		if(this.props.title === "edit") {
			this.setState({
				title: "Edit Row",
				message: null,
				
				
			});
		} else if (this.props.title === "delete"){
			this.setState({
				title: "Delete Row", 
				message: "Are you sure you want to delete this row?",
				mBody: (
				
					<tr>
						<td>{this.props.selectRow.name}</td>
						<td>{this.props.selectRow.brand}</td>
						<td>{this.props.selectRow.pet}</td>
						<td>{this.props.selectRow.price}</td>
					</tr>
					
				),
			});
		}
	}

	onClose = () => {
		//this.setState({})
		this.props.onResponse(false);

	}
	delete = () => {
		this.props.onDelete(this.props.rowToEdit, this.props.iRowToEdit);
	}

	// refactor after testing

	render() {
		if (!this.props.isOpen) {
			return null;
		} else {
			return ReactDOM.createPortal(
				<aside>
					<Modal
						show={this.props.isOpen}
						onHide={this.onClose}

					>
						<Modal.Header closeButton onClick={this.onClose}>
							<Modal.Title>{this.state.title}</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<p>{this.state.message}</p>
							<Table striped bordered size="sm">
								<thead>
									<tr>
										<th>Name</th>
										<th>Brand Name</th>
										<th>Food For</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									
									<tr>
										<td>
											<input 
												type="text" 
												maxLength="100" 
												minLength="1" 
												name="name"
												value={this.state.selectRow.name}
												onChange={this.handleChange}
											/>
										</td>
										<td>
											<input 
												type="text" 
												maxLength="100" 
												minLength="1" 
												name="brand"
												value={this.state.selectRow.brand}
												onChange={this.handleChange}
											/>
										</td>
										<td>
											<input 
												type="text"  
												maxLength="10" 
												minLength="1"
												name="pet"
												value={this.state.selectRow.pet}
												onChange={this.handleChange}
											/>
										</td>
										<td>
											<input 
												type="number" 
												step="0.01" 
												max="999.99" 
												min="0" 
												name="price"
												value={this.state.selectRow.price}
												onChange={this.handleChange}
											/>
										</td>
									</tr>
									
								</tbody>
							</Table>
						</Modal.Body>
						

						<Modal.Footer>
							<Button variant="secondary" onClick={this.onClose}>cancel</Button>
							<Button variant="danger" onClick={this.delete}>delete</Button>
						</Modal.Footer>

					</Modal>
					
				</aside>,
				document.body
			);
		}

	} 
} 


export default ModalContent;