import React from 'react';
import NewsItem from './NewsItem';
import { Row, Col } from 'react-bootstrap';
import Info from '../Info/Info';

const NewsBlock = ({ newsArticles, isHeadlines }) => (
    <>
        <Row>
            <Col>
                {newsArticles.length ?
                    <>
                        <h2>{isHeadlines
                            ? 'Today\'s Headlines'
                            : 'Your search results'
                        }</h2>
                        <hr />
                    </>
                    : <Info
                        variant={'info'}
                        message={'No results found'} />}
            </Col>
        </Row>
        <Row>
            {newsArticles.map(({ title, url, urlToImage, publishedAt }) =>
                <Col key={title} style={{ margin: 10 }}>
                    <NewsItem
                        title={title}
                        url={url}
                        urlToImage={urlToImage}
                        date={publishedAt}
                    />
                </Col>
            )}
        </Row>
    </>
)

export default NewsBlock;