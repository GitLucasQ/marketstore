import React, { useContext } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import QuantityProducts from './QuantityProduct'

import ProductContext from '../../Context/Products/ProductContext'

const ShopCart = () => {

    const { shopCart, sumTotal } = useContext(ProductContext)

    return (
        <div>
            <h5>My Cart</h5>
            <br />
            {
                shopCart.map(item =>
                    <Row className="my-4" key={item._id}>
                        <Col xs={3}>
                            <Image src={item.imgUrl} height="50px" />
                        </Col>
                        <Col xs={9}>
                            <Row style={{ textAlign: 'left' }}>
                                <p className="text-muted">{item.brand}</p>
                                <p>{item.name}</p>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs={8}>
                                    <QuantityProducts itemCart={item} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )
            }
            {
                sumTotal > 0 &&
                <div>
                    <p>Total: ${sumTotal}</p>
                    <Row>
                        <Col xs={6}>
                            <div className="d-grid gap-2">
                                <Button
                                    className="btn btn-success">
                                    CHECKOUT
                                </Button>
                            </div>

                        </Col>
                        <Col xs={6}>
                            <div className="d-grid gap-2">
                                <Button
                                    variant="outline-danger">
                                    CLEAR
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>

            }
        </div>
    )
}


export default ShopCart;