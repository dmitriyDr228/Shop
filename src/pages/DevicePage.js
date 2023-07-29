import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../static/img.png'
import {useParams}  from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
const DevicePage = () => {

    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(
        () => {
            fetchOneDevice(id).then(data=> setDevice(data))
        }, []
    )

    // const device ={id:1, name:"Iphone 12 pro", price:25000, rating: 5,
    //     img:'https://spb-apple.ru/image/cache/catalog/apple12/apple%2012%20pro%20max/apple12promax_gold_1-700x700.jpg'}
    //
    // const description = [
    //     {id:1, title:'Оператиная память ', description:'5 gb'},
    //     {id:2, title:'Камера ', description:'12 mp'},
    //     {id:3, title:'Процессор', description:'A 15 BIONIC'},
    //     {id:4, title:'Кол-во ядер ', description:'2'},
    //     {id:5, title:'Аккумулятор', description:'4000 mph'}
    // ]

    return (
       <Container>
            <Row>

                <Col md={4}>
                    <Image width={300} height={300} src={'http://localhost:5000/'+ device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center text-center'>
                        <h2>{device.name}</h2>
                        <div
                            style={{background:`url(${star}) no-repeat center center`,fontSize:64,color:'red', width: 240, height:240, backgroundSize:'cover'} }
                            className='d-flex align-items-center justify-content-center '>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        style={{width: 300, height:300, fontSize:32, border:'3px solid gray'}}
                        className="d-flex flex-column align-items-center justify-content-around">
                        <h3>От: {device.price}руб</h3>
                        <Button
                            variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>

           <Row className='d-flex flex-column m-3'>
               <h1 className='ps-0'>Характеристики</h1>

               {device.info.map( (info, index) =>
                   <Row
                       style={{background: index % 2 === 0 ? 'lightgray' : 'darkgrey', padding:10}}
                       key={info.id}
                   >
                       {info.title}: {info.description}
                   </Row>
               )}
           </Row>

       </Container>
    );
};

export default DevicePage;