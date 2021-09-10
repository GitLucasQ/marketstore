import React, { useContext } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import { TrashIcon } from '../Icons/index'
import QuantityProducts from './QuantityProduct'

import ProductContext from '../../Context/Products/ProductContext'

const ShopCart = () => {

    const { shopCart, sumTotal } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

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
                                <Row className="justify-content-md-end">
                                    <Col xs={2}>
                                        <Button
                                            className="btn btn-sm"
                                            variant="outline-danger"
                                            onClick={() => productContext.removeProductFromCart(item)}
                                        >
                                            <TrashIcon width={"20px"} />
                                        </Button>
                                    </Col>
                                </Row>
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
                    <p>Total: ${(sumTotal).toFixed(2)}</p>
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
                                    onClick={() => productContext.clearShopCart()}
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