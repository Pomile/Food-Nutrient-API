import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Wrapper';

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show}>
                <div className={classes.modal}>
                    <div className={classes.modalCloseBtn} onClick={props.close}>X</div>
                    {props.children}
                </div>
            </Backdrop>
            
        </Aux> 
    )
}

export default Modal;
