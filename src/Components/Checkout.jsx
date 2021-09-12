import React, { useContext } from 'react'

import ProductContext from '../Context/Products/ProductContext'
import { Button, Col, Container, Row } from 'react-bootstrap'

import ItemsOrderSummary from './Shopcart/ItemOrderSummary'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const { shopCart, sumTotal } = useContext(ProductContext)

    return (
        <div>
            <Container fluid className="mt-4">
                <Row>
                    <Col xs={12}>
                        <Row className="mb-4">
                            <Col xs={6}>
                                <h4 style={{ textAlign: 'left' }}>Order Summary</h4>
                            </Col>
                            <Col xs={6}>
                                <h5
                                    style={{
                                        textAlign: 'right',
                                        padding: '0px 40px'
                                    }}
                                >
                                    Items: {shopCart.length}
                                </h5>
                            </Col>
                        </Row>
                        <Row className="mx-4">
                            <ItemsOrderSummary />
                        </Row>
                        <Row>
                            <Col className="mx-4 d-flex justify-content-end">
                                <p><strong>Total: ${sumTotal}</strong></p>
                            </Col>
                        </Row>
                        <Row className="mx-4">
                            <Col>
                                <div className="d-flex justify-content-start">
                                    <Link to="/">
                                        <Button
                                            variant="outline-primary">
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        className="btn btn-success px-4">
                                        Checkout
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Checkout