import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Table } from 'react-bootstrap';
import Footer from './Footer';


class CustomEditor extends React.Component {
    constructor(props){
        super(props);
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
			this.props.onEdit(this.props.rowToEdit, this.props.iRowToEdit, this.state.selectRow);
		}

    getValue() {
      // should return an object of key/value pairs to be merged back to the row

    }
  
    getInputNode() {
      // If applicable, should return back the primary html input node that is used to edit the data
      // Otherwise return null
      // If value is an input node, then this node will be focussed on when the editor opens
    }
  
    /*disableContainerStyles() {
      // Optional method
      // If set to true, the EditorContainer will not apply default styling to the editor
    }*/
  
    render() {
			console.log(this.props.rowData);
      return ReactDOM.createPortal(
				<aside>
					<Modal
						show={this.props.isOpen}
						onHide={this.onClose}
					>
						<Modal.Header closeButton onClick={this.onClose}>
							<Modal.Title>{this.state.title}</Modal.Title>
						</Modal.Header>
						{/*Do a crappy conditional if for now for deleting and editing*/ }
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

  export default CustomEditor;
  