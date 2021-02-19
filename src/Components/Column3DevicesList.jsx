import React from 'react';
import DeviceItem from './DeviceItem'
import TitleBadge from './TitleBadge'

const content = (props) => {
    return (
        <div className="col-md-4 ">
            <div className="row form-group">
                <div className="col-md-6">
                    <TitleBadge
                        title="Devices"
                        count={props.devicesList.length} />
                </div>
                <br />
            </div>
            <ul className="list-group ">
                {
                    props.devicesList.length > 0 ?
                        props.devicesList.map((dElement, i) => {
                            return <DeviceItem
                                key={i}
                                index={i}
                                id={dElement.uid}
                                title={dElement.date}
                                onDelete={props.onDelete}
                                innerText={dElement.uid + " => Vendor: " + dElement.vendor + " [Status: " + (dElement.status ? "Online" : "Offline") + "]"} />
                        }) : <></>
                }
            </ul>
        </div>
    );
};

export default content;