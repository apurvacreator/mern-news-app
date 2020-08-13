import React from 'react';
import PropTypes from 'prop-types';
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

SearchBar.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default SearchBar;