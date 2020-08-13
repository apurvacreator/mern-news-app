import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Layout = ({ children }) => (
    <>
        <Header />
        <Container style={{ margin: '50px auto' }}>
            {children}
        </Container>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout