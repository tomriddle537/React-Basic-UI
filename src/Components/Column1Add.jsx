import React from 'react';
import TitleBadge from './TitleBadge'


const column1Add = (props) => {
    return (
        <div className="col-md-4">
            <TitleBadge
                title="Add"
                count="DEVICE" />
            <div className="col-md-12 style-group">
                <div className="col-md-12">
                    <label htmlFor="inputDeviceUID">Device UID (number)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputDeviceUID"
                        onChange={event => props.changeUid(event.target.value)}
                        placeholder="Device UID" />
                    <br />
                    <label htmlFor="inputDeviceVendor">Device Vendor (text)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputDeviceVendor"
                        onChange={event => props.changeVendor(event.target.value)}
                        placeholder="Device Vendor" />

                    <div className="form-group">
                        <br />
                        <label >Status</label>
                        <div className="row" >
                            <div className="col-md-3 style-group">
                                <label>
                                    <input
                                        type="radio"
                                        id="radioOnline"
                                        className="radio-inline"
                                        name="status"
                                        title="Online"
                                        value="online"
                                        onChange={event => props.clickRadio(event.target.value)} />&nbsp;Online
                                </label>
                            </div>
                            <div className="col-md-3 style-group">
                                <label>
                                    <input
                                        type="radio"
                                        id="radioOffline"
                                        className="radio-inline"
                                        name="status"
                                        title="Offline"
                                        value="offline"
                                        onChange={event => props.clickRadio(event.target.value)} />&nbsp;Offline
                                </label>
                            </div>
                            <div className="col-md-6">
                                <span className="float-right">
                                    <button
                                        type="button"
                                        id="addDevice"
                                        className="btn btn-primary"
                                        onClick={() => props.onAdd()} >+ Add</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default column1Add;