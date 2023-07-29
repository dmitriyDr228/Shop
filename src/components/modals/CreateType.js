import React, {useState} from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {

    const [nameType, setNameType] = useState('')
    const addType = () =>{
        createType({name: nameType}).then(data => {
            setNameType('')
            onHide()
        })
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
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormControl
                    placeholder={"Введите название типа"}
                    value={nameType}
                    onChange={e=> setNameType(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button variant='outline-success'  onClick={addType}>Добавить</Button>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;