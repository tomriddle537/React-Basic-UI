import React from 'react';
import GatewayItem from './GatewayItem'
import TitleBadge from './TitleBadge'

const column2GatewaysList = (props) => {
    return (
        <div className="col-md-4 ">
            <div className="row form-group">
                <div className="col-md-5">
                    <TitleBadge
                        title="Gateways"
                        count={props.gatewayList.length} />
                </div>
                <div className="col-md-7">
                    <input
                        type="text"
                        className="form-control"
                        id="inputGateway"
                        placeholder="Enter Gateway Serial Number"
                        onChange={(event) => props.onSearchChange(event.target.value)} />
                </div>
                <br />
            </div>
            <ul className="list-group">
                {
                    props.gatewayList.map((gwElement, index) => {
                        return <GatewayItem
                            key={index}
                            id={gwElement.serialNumber}
                            innerText={gwElement.serialNumber + " => Name: " + gwElement.name + " [IP:" + gwElement.ipAddress + "]"}
                            selectedItem={gwElement.serialNumber === props.sGateway}
                            onClick={props.onClick} />
                    })
                }
            </ul>
        </div>
    );
};

export default column2GatewaysList;