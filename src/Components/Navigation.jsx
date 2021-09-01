import React, { useState, useEffect, useContext } from 'react'
import { Container, Navbar, Nav, Modal, Form, Button, NavDropdown, FormControl, Badge, OverlayTrigger } from 'react-bootstrap'
import '../Assets/css/Navigation.css'

import ProductContext from '../Context/Products/ProductContext'


const Navigation = () => {

    const { shopCart } = useContext(ProductContext)
    const productContext = useContext(ProductContext)

    const [showSignin, setShowSignin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)

    const handleOpenSignIn = () => { setShowSignin(true) }
    const handleCloseSignIn = () => { setShowSignin(false) }
    const handleSubmitSignIn = (e) => {
        e.preventDefault()
    }

    const handleOpenSignUp = () => { setShowSignup(true) }
    const handleCloseSignUp = () => { setShowSignup(false) }
    const handleSubmitSignUp = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        productContext.getCategoriesProducts()
    }, [])


    return (
        <div>
            <Navbar className="navigation" expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">MarketStore</Navbar.Brand>
                    <Form>
                        <FormControl
                            type="search"
                            className="ml-auto"
                            placeholder="Search products..."
                            aria-label="Search" />
                    </Form>
                    <Nav className="ml-auto">
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => productContext.getAllProducts()}>All</NavDropdown.Item>
                            {
                                productContext.categories.map((category) =>
                                    <NavDropdown.Item
                                        key={category}
                                        onClick={() => productContext.getProductsByCategories(category)}>
                                        {category}
                                    </NavDropdown.Item>
                                )
                            }
                        </NavDropdown>
                        <Nav.Link className="px-4" href="#" onClick={handleOpenSignIn}>Sing in</Nav.Link>
                        <Nav.Link className="px-4" href="#" onClick={handleOpenSignUp}>Sign up</Nav.Link>
                        <Nav.Link className="px-2" style={{ color: "#fff" }}>
                            <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>
                            My cart <Badge bg="success">{shopCart.length}</Badge>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* MODAL SIGN IN */}
            <Modal size="sm" show={showSignin} onHide={handleCloseSignIn}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter your credentials</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="success" type="submit" onClick={handleSubmitSignIn}>
                                Sign In
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* MODAL SIGN UP */}
            <Modal size="sm" show={showSignup} onHide={handleCloseSignUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Register your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" onClick={handleSubmitSignUp}>
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Navigation;