import React from 'react';
import './ModalBox.css';
export const ModalBox = props => {
    return (
        <div>
            <div id="myModal" class="modal">
                <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    )
}