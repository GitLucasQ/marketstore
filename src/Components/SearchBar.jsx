import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import axios from 'axios'


const SearchBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = async () => {
        const resp = await axios.get('http://localhost:7000/products/getCategories')
        setCategories(resp.data)
    }

    return (
        <div className="navigation">
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Nav navbarScroll>
                                <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                    {
                                        categories.map((category) =>
                                            <NavDropdown.Item key={category}>{category}</NavDropdown.Item>
                                        )
                                    }
                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col md={8}>
                            <Form className="">
                                <Form.Control size="sm" type="text" placeholder="Type some word to search..." />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}

export default SearchBar;