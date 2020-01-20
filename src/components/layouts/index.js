import React, { Component } from 'react'
import {Row, Col, Container} from 'reactstrap'
import Navbar from './navbar'

export default class index extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} lg={12}>
                    <Navbar />
                </Col>
                <Col sm={12} lg={12}>
                    <Container fluid>
                        {this.props.children}
                    </Container>
                </Col>
            </Row>
        )
    }
}
