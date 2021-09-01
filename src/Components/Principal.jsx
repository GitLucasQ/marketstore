import React, { useEffect, useContext } from 'react'
import Navigation from './Navigation'
import ShopCart from './Shopcart/ShopCart'

import ProductContext from '../Context/Products/ProductContext'
import { Card, Col, Container, Row, Button, ListGroup } from 'react-bootstrap'

const Principal = () => {

    const { products, categories, shopCart } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

    useEffect(() => {
        productContext.getAllProducts()
    }, [])

    const addProductToCart = (selectedProduct) => {
        productContext.addProductToCart(selectedProduct)
        console.log(shopCart)
    }

    return (
        <div>
            <Navigation />
            <Container fluid className="mt-4">
                <Row>
                    <h5 style={{ textAlign: 'left' }}>Filter by category</h5>
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item
                            style={{ textAlign: 'left' }}
                            action
                            onClick={() => productContext.getAllProducts()}>
                            All
                        </ListGroup.Item>
                        {
                            categories.map((category) =>
                                <ListGroup.Item
                                    key={category}
                                    style={{ textAlign: 'left' }}
                                    action
                                    onClick={() => productContext.getProductsByCategories(category)}>
                                    {category}
                                </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </Row>
                <br />
                <Row>
                    <h5>Choose your product</h5>
                    <Col xs={8}>
                        <Row>
                            {
                                products.map((product) =>
                                    <Col
                                        key={product._id}
                                        className="pt-4"
                                        md={4}>
                                        <Card style={{ width: '14rem' }}>
                                            <Card.Img style={{ height: "12rem" }} variant="top" src={product.imgUrl} />
                                            <Card.Body>
                                                <Card.Subtitle className="mb-2 text-muted">{product.brand}</Card.Subtitle>
                                                <Card.Title>{product.name}</Card.Title>
                                                <Card.Text>
                                                    Price: ${product.price}
                                                </Card.Text>
                                                <Button
                                                    variant="success"
                                                    onClick={() => addProductToCart(product)}
                                                >Add to cart
                                                </Button>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <ShopCart />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Principal;