import React, {useState} from 'react';
import {Button, FormControl, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show,onHide}) => {

    const [nameBrand, setNameBrand] = useState('')

    const addBrand = () =>{
        createBrand({name:nameBrand}).then(()=>{
            setNameBrand('')
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
                    value={nameBrand}
                    onChange={(e)=> setNameBrand(e.target.value) }
                />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button variant='outline-success' onClick={addBrand}>Добавить</Button>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;