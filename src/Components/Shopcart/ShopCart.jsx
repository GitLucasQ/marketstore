import React, { useContext } from 'react'
import { Col, Row, Image } from 'react-bootstrap'

import ProductContext from '../../Context/Products/ProductContext'

const ShopCart = () => {

    const { shopCart } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

    return (
        <div>
            <h5>My Cart</h5>
            <br />
            {
                shopCart.map(item =>
                    <Row key={item._id}>
                        <Col xs={2}>
                            <Image src={item.imgUrl} height="50px" />
                        </Col>
                        <Col xs={10}>
                            <Row style={{ textAlign: 'left' }}>
                                <p className="text-muted">{item.brand}</p>
                                <p>{item.name}</p>
                            </Row>
                            <Row>
                                <p>Quantity: {item.quantity}</p>
                            </Row>
                        </Col>
                    </Row>
                )
            }
        </div>
    )
}


export default ShopCart;