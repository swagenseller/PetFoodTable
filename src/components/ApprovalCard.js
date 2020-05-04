import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Table } from 'react-bootstrap';



// will need to refactor this

class ApprovalCard extends Component {
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
		console.log("mount")
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
	edit = () =>{
		//console.log("clicked this button")
		//this.props.onGridRowsUpdated(this.props.rowToEdit, this.props.rowToEdit + 1,this.state.selectRow )
		//this.props.onResponse();
		this.props.onEdit(this.props.rowToEdit, this.props.iRowToEdit, this.state.selectRow);
	}

	// need to refactor
	render() {
			return ReactDOM.createPortal(
				<aside>
					<div>
						<div>
							<h1>{this.state.title}</h1>
						</div>
						{/*Do a crappy conditional if for now for deleting and editing*/ }
						<div>
							<p>{this.state.message}</p>
							<table>
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
							</table>
						</div> 

						<div>
							<button onClick={this.onClose}>Cancel</button>
							<button onClick={this.edit}>edit</button>
                        </div>	
					</div>
					
				</aside>,
				document.body
			);

	} 
} 


export default ApprovalCard;