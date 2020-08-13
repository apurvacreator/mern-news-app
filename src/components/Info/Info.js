import React from 'react';
import { Alert } from 'react-bootstrap';

const Info = ({ message, variant }) => (
    <Alert variant={variant}>
        {message}
    </Alert>
)

export default Info;