import React, { useContext } from 'react'

import ProductContext from '../Context/Products/ProductContext'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Checkout = () => {

    const { shopCart, sumTotal } = useContext(ProductContext)

    return (
        <div>
            <Container fluid className="mt-4">
                <Row>
                    <Col xs={8}>
                        {
                            shopCart.map(item =>
                                <Col xs={12}>
                                    <Card>
                                        <Row>
                                            <Col xs={4}>
                                                <Card.Img
                                                    style={{ height: '8rem', width: '8rem' }}
                                                    src={item.imgUrl}
                                                    variant="top"
                                                />
                                            </Col>
                                            <Col xs={8}>
                                                <Card.Body style={{ textAlign: 'left' }}>
                                                    <Card.Subtitle className="mb-2 text-muted">
                                                        {item.brand}
                                                    </Card.Subtitle>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                                                    <Card.Text>Price: ${item.price}</Card.Text>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )
                        }
                    </Col>
                    <Col xs={4}>
                        <h5>RESUMEN</h5>
                        <p>${sumTotal}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Checkout