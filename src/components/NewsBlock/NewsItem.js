import React from 'react';
import PropTypes from 'prop-types';
import { Card, SafeAnchor } from 'react-bootstrap';
import NoImage from '../../no-camera.svg';

const NewsItem = ({ urlToImage, title, url, date }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={urlToImage || NoImage} alt={title} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{new Date(date).toLocaleDateString()}</Card.Text>
            <SafeAnchor variant="primary" href={url} target='_blank'>Read the article</SafeAnchor>
        </Card.Body>
    </Card>
)

NewsItem.propTypes = {
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string,
}

export default NewsItem;