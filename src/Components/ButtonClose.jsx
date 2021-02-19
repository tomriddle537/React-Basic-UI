import React from 'react';

const buttonClose = (props) => {
    return (
        <span className="float-right button-group" >
            <button data-id={props.id} type="button"
                onClick={() => props.onDelete(props.id, props.index)}
                className="btn btn-danger"
                aria-label="Left Align">
                <span aria-hidden="true">x</span>
            </button>
        </span>
    );
};

export default buttonClose;