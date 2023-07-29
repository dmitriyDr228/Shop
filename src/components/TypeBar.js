import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../index";

const TypeBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <ListGroup style={{background:'darkgrey', border:'1px solid darkgrey'}}>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{border:'0.5px solid grey', cursor:'pointer'}}
                    key={type.name}
                    onClick={() => {
                        device.setSelectedType(type)
                    }}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;