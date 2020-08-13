import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Info = ({ message, variant }) => (
    <Alert variant={variant}>
        {message}
    </Alert>
)

Info.propTypes = {
    message: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
}

export default Info;