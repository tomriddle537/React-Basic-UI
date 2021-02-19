import React from 'react';

const alertBar = (props) => {
    return (
        <div className="col-md-6 offset-md-3">
            <div role="alert" className={props.type !== "error" ? "alert alert-primary" : "alert alert-danger"} >
                {props.innerText}
            </div>
        </div>
    );
};

export default alertBar;


