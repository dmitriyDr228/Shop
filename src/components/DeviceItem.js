import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../static/img.png'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const DeviceItem = observer( ({device}) => {

    const navigate = useNavigate()
    const {brand} = useContext(Context)

    const getBrandsById  = (id) =>{
        return brand.brands.find(brand => brand.id === id).name
    }


    return (
        <Col md={3}>
            <Card style={{width:150, cursor:"pointer"}} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id )} border={"light"}>
                <Image width={150} height={150} src={'http://localhost:5000/' + device.img}/>
                <div className="d-flex text-black-50 mt-2 justify-content-between align-items-center">
                    <div>{getBrandsById(device.brandId)} {device.brands}</div>
                        <div style={{fontSize:"20px", color:'red'}} className="d-flex align-items-center">
                            { device.rating}
                            <Image  width={25} height={25} className='ms-0.5' src={star}></Image>
                        </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
});

export default DeviceItem;