import React from 'react';
import ListItem from './ListItem';

const deviceItem = (props) => {
    return (
        <ListItem id={props.id}
            index={props.index}
            innerText={props.innerText}
            selectedItem={props.selectedItem}
            closeButton={true}
            onDelete={props.onDelete}
            title={props.title} />
    );
};

export default deviceItem;

