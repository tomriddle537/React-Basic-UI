import React from 'react';
import ButtonClose from './ButtonClose';

const listItem = (props) => {
    return (
        <li title={props.title}
            data-id={props.id}
            className={props.selectedItem ? "list-group-item clearfix list-group-item-success" : "list-group-item clearfix"}
            onClick={props.closeButton ? () => { } : () => props.onClick(props.id)} >
            {props.innerText}
            {props.closeButton ? <ButtonClose id={props.id} index={props.index} onDelete={props.onDelete} /> : ""}
        </li>
    );
};

export default listItem;