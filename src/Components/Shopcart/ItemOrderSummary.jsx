import React, { useContext } from 'react'
import { Button, Col, Image, Row, Table } from 'react-bootstrap';

import ProductContext from '../../Context/Products/ProductContext'

const ItemsOrderSummary = () => {

    const { shopCart } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shopCart.map(item =>
                            <tr>
                                <td>
                                    <Row>
                                        <Col xs={4}>
                                            <Image
                                                src={item.imgUrl}
                                                style={{ height: '6rem', width: '6rem' }} />
                                        </Col>
                                        <Col xs={8}>
                                            <p style={{ textAlign: 'left' }}>{item.name}</p>
                                            <p style={{ textAlign: 'left' }}>${item.price}</p>
                                        </Col>
                                    </Row>
                                </td>
                                <td className="align-middle">{item.quantity}</td>
                                <td className="align-middle">${(item.quantity * item.price).toFixed(2)}</td>
                                <td className="align-middle">
                                    <Button
                                        onClick={() => productContext.removeProductFromCart(item)}
                                        variant="outline-danger">
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ItemsOrderSummary;