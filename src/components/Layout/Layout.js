import React from 'react';
import { Container } from 'react-bootstrap'
import Header from '../Header/Header';

const Layout = ({ children }) => (
    <>
        <Header />
        <Container style={{ margin: '50px auto' }}>
            {children}
        </Container>
    </>
)
export default Layout