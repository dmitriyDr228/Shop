import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>

            <Button variant={"outline-danger"}
                    onClick={() => setTypeVisible(true)}
                    className='m-3 p-2'>Добавить тип</Button>

            <Button variant={"outline-danger"}
                    onClick={() => setBrandVisible(true)}
                    className='m-3 p-2'>Добавить бренд</Button>

            <Button variant={"outline-danger"}
                    onClick={() => setDeviceVisible(true)}
                    className='m-3 p-2'>Добавить устройство</Button>

            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </Container>
    );
};

export default Admin;