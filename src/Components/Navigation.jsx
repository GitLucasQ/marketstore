import React, { useEffect, useContext, useState } from 'react'
import { Container, Navbar, Nav, Badge, Offcanvas } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../Assets/css/Navigation.css'

import ProductContext from '../Context/Products/ProductContext'
import ShopCart from './Shopcart/ShopCart'


const Navigation = () => {

    const { shopCart } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

    const [showFloatingShopCart, setshowFloatingShopCart] = useState(false)
    const handleOpen = () => setshowFloatingShopCart((s) => !s)
    const handleClose = () => setshowFloatingShopCart(false)

    useEffect(() => {
        productContext.getCategoriesProducts()
    }, [])    

    return (
        <div>
            <Navbar className="navigation" expand="lg" variant="dark" >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>MarketStore</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                        <Nav.Link
                            className="px-2" 
                            tyle={{ color: "#fff" }}
                            onClick={handleOpen}
                        >
                            <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
                            My cart <Badge bg="success">{shopCart.length}</Badge>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Offcanvas show={showFloatingShopCart} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My ShopCart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ShopCart />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Navigation;