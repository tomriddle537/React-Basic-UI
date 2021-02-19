import React, { useState, useEffect } from 'react';
import AlertBar from './AlertBar';
import Column1Add from './Column1Add';
import Column2GatewaysList from './Column2GatewaysList';
import Column3DevicesList from './Column3DevicesList';
import axios from 'axios';


const Content = (props) => {
    //Lists states
    const [gatewayList, setGatewaysList] = useState([]);
    const [filterGatewaysList, setFilterGatewaysList] = useState([]);
    const [devicesList, setDevicesList] = useState([]);

    //Enviroment states
    const [selectedGateway, setSelectedGateway] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //Add Device states
    const [selectedRadioStatus, setSelectedRadioStatus] = useState("offline");
    const [deviceUid, setDeviceUid] = useState("");
    const [deviceVendor, setDeviceVendor] = useState("");


    //Comlumn 3 Gateways List
    const onGatewaySearchChange = (text) => {
        setFilterGatewaysList(gatewayList.filter(x => x.serialNumber.includes(text)));
    }

    const onLoadGateways = () => {
        axios.get("https://localhost:44306/api/gateways").then((resp) => {
            setGatewaysList(resp.data);
            setSelectedGateway(resp.data[0].serialNumber);
            setFilterGatewaysList(resp.data);
        }).catch(error => {
            setErrorMessage(error.response.data.Message);
        });
    }

    const onClickGateway = (id) => {
        setSelectedGateway(filterGatewaysList.find(gw => gw.serialNumber === id).serialNumber);
    }


    //Comlumn 2 Devices List
    const onDeleteDevice = (uid, index) => {
        const uri = "https://localhost:44306/api/devices/".concat(selectedGateway).concat("/").concat(uid);
        axios.delete(uri).then(() => {
            const devicesCopy = devicesList.slice();
            devicesCopy.splice(index, 1);
            setDevicesList(devicesCopy);
            setErrorMessage("");
        }).catch(error => {
            setErrorMessage(error.response.data.Message);
        })
    }

    const onLoadDevices = () => {
        const uri = "https://localhost:44306/api/devices/gw/".concat(selectedGateway);
        if (selectedGateway) {
            axios.get(uri).then((resp) => {
                setDevicesList(resp.data);
                setErrorMessage("");
            }).catch(error => {
                setErrorMessage(error.response.data.title ? error.response.data.title : error.response.data.Message);
                setDevicesList([])
            });
        }
    }

    //Column 1 Add
    const onClickRadio = (status) => {
        setSelectedRadioStatus(status);
    }

    const onChangeUid = (text) => {
        setDeviceUid(text);
    }

    const onChangeVendor = (text) => {
        setDeviceVendor(text);
    }

    const onAddDevices = () => {
        const uri = "https://localhost:44306/api/devices/".concat(selectedGateway);
        if (deviceUid.trim() != "" && deviceVendor.trim() != "" && !isNaN(deviceUid)) {
            let device = { uid: deviceUid, vendor: deviceVendor, status: (selectedRadioStatus === "online" ? true : false), date: (new Date()) };
            axios.post(uri, device).then(() => {
                setErrorMessage("");
                onLoadDevices();
            }).catch(error => {
                setErrorMessage(error.response.data.Message);
            });
        } else {
            setErrorMessage("Please set a Device UID (number), Device Vendor (text) and Status. Then hit the Add button");
        }
    }

    useEffect(onLoadGateways, []);
    useEffect(onLoadDevices, [selectedGateway]);

    return (
        <div className="row">

            <AlertBar
                type="primary"
                innerText={"[Selected Gateway: " + selectedGateway + "]  "
                    + " [Selected Status: " + selectedRadioStatus + "]  "
                    + " [Device UID: " + deviceUid + "]  "
                    + " [Device Vendor: " + deviceVendor + "]"} />


            {errorMessage ? <AlertBar type="error" innerText={errorMessage} /> : ""}

            <Column1Add
                sGateway={selectedGateway}
                onAdd={onAddDevices}
                clickRadio={onClickRadio}
                changeUid={onChangeUid}
                changeVendor={onChangeVendor} />

            <Column2GatewaysList
                sGateway={selectedGateway}
                gatewayList={filterGatewaysList}
                onClick={onClickGateway}
                onSearchChange={onGatewaySearchChange} />

            <Column3DevicesList
                sGateway={selectedGateway}
                devicesList={devicesList}
                onDelete={onDeleteDevice} />

        </div>
    );
};

export default Content;