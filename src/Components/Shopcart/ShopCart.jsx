import React, { useContext } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import QuantityProducts from './QuantityProduct'

import ProductContext from '../../Context/Products/ProductContext'

const ShopCart = () => {

    const { shopCart } = useContext(ProductContext)    

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
        </div>
    )
}


export default ShopCart;