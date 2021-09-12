import React, { useContext } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import { TrashIcon } from '../Icons/index'
import QuantityProducts from './QuantityProduct'
import { Link } from 'react-router-dom'

import ProductContext from '../../Context/Products/ProductContext'

const ShopCart = () => {

    const { shopCart, sumTotal } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

    const removeItem = (item) => {
        productContext.removeProductFromCart(item)
    }

    return (
        <div>
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
                                            onClick={() => removeItem(item)}
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
                    <div className="d-flex justify-content-end">
                        <p><strong>Total: ${(sumTotal).toFixed(2)}</strong></p>
                    </div>
                    <Row>
                        <Col xs={6}>
                            <div className="d-grid gap-2">
                                <Button
                                    as={Link}
                                    to='/checkout'
                                    className="btn btn-success">
                                    PROCEED
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