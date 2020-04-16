import React from 'react';

class ApprovalCard extends React.Component{
    
    
    render(){
        if(!this.props.isOpen){
            return null;
        }
        else {
            return (
                <div>
                    <button>Delete</button>
                    <button>Cancel</button>
                </div>
            )
        }
    }
  
    
}

export default ApprovalCard;