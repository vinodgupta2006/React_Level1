import React from 'react';
import Button from 'react-bootstrap/Button';

const button = (props) =>{
    
    return <Button 
                variant={props.variant} 
                type={props.type}
                className={props.className}
                onClick={props.onClick}
            >
                {props.name}
            </Button>;
}

export default button;