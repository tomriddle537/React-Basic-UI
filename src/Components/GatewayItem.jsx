import React from 'react';
import ListItem from './ListItem';

const gatewayItem = (props) => {
   return (
      <ListItem id={props.id}
         innerText={props.innerText}
         selectedItem={props.selectedItem}
         closeButon={false}
         onClick={props.onClick} />
   );
};

export default gatewayItem;