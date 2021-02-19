import React from 'react';

const titleBadge = (props) => {
    return (
        <h2>{props.title}&nbsp;
            <span id="devicesBadge"
                className="badge badge-dark">
                {props.count}
            </span>
        </h2>
    );
};

export default titleBadge;

