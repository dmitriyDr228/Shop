import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {values} from "mobx";

const CreateDevice = observer( ({show,onHide}) => {

    const {device} = useContext(Context)

    const [name,setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file,setFile] = useState(null)
    const [brand,setBrand] = useState(null)
    const [type,setType] = useState(null)

    const [info, setInfo] = useState([])

    useEffect(
        () => {
            fetchBrands().then(data => device.setBrands(data))
            fetchTypes().then(data => device.setTypes(data))
        }, []
    )

    const addInfo = () =>{
        setInfo([...info, {title:'', description:'', number:Date.now()}])
    }
    const selectFile = e =>{
        setFile(e.target.files[0])
    }

    const deleteInfo = (number) =>{
        setInfo(info.filter((i) => i.number !== number  ))
    }

    const changeInfo= (key, value, number) =>{
        setInfo(info.map(i => i.number === number ? {...i,[key]: value} : i))
    }

    const addDevice = () =>{
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('price', `${price}`)
            formData.append('img', file)
            formData.append('rating', device.selectedRating)
            formData.append('brandId', device.selectedBrand.id)
            formData.append('typeId', device.selectedType.id)
            formData.append('info', JSON.stringify(info))
            createDevice(formData).then(data => onHide())
        }catch (e){
            console.log(e.message)
        }

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className='d-flex justify-content-between'>
                <Dropdown className='m-3'>
                    <Dropdown.Toggle>{device.selectedRating +' звезды' || "Укажите рейтинг"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.rating.map((rating) =>
                            <Dropdown.Item
                                onClick={()=>device.setSelectedRating(rating)}
                                key={rating}
                            >
                                {rating}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='m-3'>
                    <Dropdown.Toggle>{device.selectedType.name || "Выберите Тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map((type) =>
                            <Dropdown.Item
                                onClick={()=>device.setSelectedType(type)}
                                key={type.id}
                            >
                                {type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='m-3'>
                    <Dropdown.Toggle>{device.selectedBrand.name || "Выберите брэнд"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map((brand) =>
                            <Dropdown.Item
                                onClick={()=>device.setSelectedBrand(brand)}
                                key={brand.id}
                            >
                                {brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
                <FormControl
                    className='mt-3'
                    placeholder="Введите название устройства"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
                <FormControl
                    className='mt-3'
                    placeholder="Введите стоимость устройства"
                    type="number"
                    value={price}
                    onChange={e =>setPrice(Number(e.target.value))}
                />
                <FormControl
                    className='mt-3'
                    type='file'
                    onChange={selectFile}
                />
                <hr/>
            <Button
                onClick={addInfo}
                variant={"outline-dark"}
            >
                Добавить новое свойство
            </Button>
                {info.map(i =>
                    <Row className='mt-4' key={i.number}>
                        <Col md={4}>
                            <FormControl
                                placeholder='Навзание свойства'
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}

                            />
                        </Col>
                        <Col md={4}>
                            <FormControl
                                value={i.description}
                                placeholder='Описание свойства'
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}

                            />
                        </Col>
                        <Col md={4}>
                            <Button
                                onClick={()=>deleteInfo(i.number)}
                                variant={"outline-danger"}> Удалить </Button>
                        </Col>
                    </Row>
                )}

            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>

            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;