import React, { useEffect, useContext } from 'react'
import { Container, Navbar, Nav, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import '../Assets/css/Navigation.css'

import ProductContext from '../Context/Products/ProductContext'


const Navigation = () => {

    const { shopCart } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

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
                        <Link to='/checkout'>
                            <Nav.Link as={Link} to="/checkout" className="px-2" style={{ color: "#fff" }}>
                                <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
                                My cart <Badge bg="success">{shopCart.length}</Badge>
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;