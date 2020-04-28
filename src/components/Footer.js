import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Table } from 'react-bootstrap';

const Footer = (props) => {
    if(props.title ==="edit"){
        return(
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>cancel</Button>
                <Button variant="primary" onClick={props.edit}>Edit</Button>
            </Modal.Footer>
        );
    } else if(props.title ==="delete"){
        return(
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>cancel</Button>
                <Button variant="danger" onClick={props.delete}>delete</Button>
            </Modal.Footer>
        );
    } else{
        // change with an error message?
        return null;
    }
   
}


export default Footer; 

