import React, {useContext} from 'react';
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {

    const {device} = useContext(Context)

    return (
        <div className="d-flex">
            {device.brands.map(
                brand =>
                    <Card
                        style={{border:'1px solid grey', cursor:'pointer'}}
                        className="p-3"
                        key={brand.name}
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                    </Card>

            )}
        </div>
    );
});

export default BrandBar;