import React from 'react';
import { Table , Modal} from 'react-bootstrap';

// displays the Modal.Footer buttons based on props.title
const ModBody= (props) => {
    let display = null;
    if(props.title === 'edit'){
      display = (
				<ul>
					<li>
						<input 
							type="text" 
							maxLength="100" 
							minLength="1" 
							name="name"
							value={props.selectRow.name}
							onChange={props.handleChange}
						/>
					</li>
					<li>
						<input 
							type="text" 
							maxLength="100" 
							minLength="1" 
							name="brand"
							value={props.selectRow.brand}
							onChange={props.handleChange}
						/>
					</li>
					<li>
						<input 
							type="text"  
						  maxLength="10" 
							minLength="1"
							name="pet"
							value={props.selectRow.pet}
							onChange={props.handleChange}
						/>
					</li>
						<li>
							<input 
								type="number" 
								step="0.01" 
								max="999.99" 
								min="0" 
								name="price"
								value={props.selectRow.price}
								onChange={props.handleChange}
							/>
						</li>	
				</ul>
			);
    } else if (props.title === 'delete'){
			display = (
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
								{props.selectRow.name}
							</td>
							<td>
								{props.selectRow.brand}
							</td>
							<td>
								{props.selectRow.pet}
							</td>
							<td>
								{props.selectRow.price}
							</td>
						</tr>
					</tbody>
				</Table>
			);
		}

		return (
			<Modal.Body>
				{display}
			</Modal.Body>
		);
};

export default ModBody;