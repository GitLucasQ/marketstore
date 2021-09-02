import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { PlusCircleIcon, MinusCircleIcon } from '../Icons/index'

import ProductContext from '../../Context/Products/ProductContext'

const QuantityProducts = (props) => {

    const productContext = useContext(ProductContext)

    return (
        <div>
            <Row>
                <Col xs={4}>
                    <Button
                        onClick={() => productContext.decreaseQuantity(props.itemCart)}
                        className="btn btn-danger btn-sm mr-2 mb-1"
                        style={{ borderRadius: '100%' }}>
                        <MinusCircleIcon width={"20px"} />
                    </Button>
                </Col>
                <Col xs={4}>
                    {props.itemCart.quantity}
                </Col>
                <Col xs={4}>
                    <Button
                        onClick={() => productContext.increaseQuantity(props.itemCart)}
                        className="btn btn-primary btn-sm mr-2 mb-1"
                        style={{ borderRadius: '100%' }}>
                        <PlusCircleIcon width={"20px"} />
                    </Button>
                </Col>
            </Row>
        </div >
    )
}

export default QuantityProducts;