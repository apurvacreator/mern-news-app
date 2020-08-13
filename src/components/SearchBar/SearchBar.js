import React from 'react';
import { FormControl, Col, Row } from 'react-bootstrap';

const SearchBar = ({ handleChange }) => (
    <Row>
        <Col lg={6} style={{ marginBottom: '20px' }}>
            <FormControl
                placeholder="Search other news"
                onChange={handleChange}
            />
        </Col>
    </Row>
)

export default SearchBar;