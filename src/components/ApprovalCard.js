import React from 'react';

class ApprovalCard extends React.Component{
    
    cancel = () =>{
        //console.log(this.props.rowToEdit)
        this.props.onResponse(false)
    }
    delete = () =>{
        console.log("inside approval card: " + this.props.rowToEdit);
        this.props.onDelete(this.props.rowToEdit, this.props.iRowToEdit);
    }
    render(){
        if(!this.props.isOpen){
            return null;
        }
        else {
            return (
                <div>
                    <button onClick={this.delete}>Delete</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            )
        }
    }
  
    
}

export default ApprovalCard;