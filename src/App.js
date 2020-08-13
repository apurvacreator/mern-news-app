import React, { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import _ from 'lodash';
import Layout from './components/Layout/Layout';
import NewsBlock from './components/NewsBlock/NewsBlock';
import SearchBar from './components/SearchBar/SearchBar';
import Info from './components/Info/Info';
import './App.css';

const baseUrl = 'http://localhost:4000';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isHeadlines, setIsHeadLines] = useState(true);
  const [newsArticles, setNewsArtcles] = useState([]);

  useEffect(() => {
    getHeadlines()
  }, [])

  const getHeadlines = async () => {
    try {
      const response = await fetch(`${baseUrl}/top-headlines?country=gb`)
      const data = await response.json()
      if (data.status === 'ok') {
        setNewsArtcles(data.articles)
        setIsLoading(false)
        setIsHeadLines(true)
      }
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  const getSearchedNews = async (query) => {
    try {
      const response = await fetch(`${baseUrl}/everything?q=${query}`)
      const data = await response.json()
      if (data.status === 'ok') {
        setNewsArtcles(data.articles)
        setIsHeadLines(false)
        setIsLoading(false)
      }
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  const getNews = (query) => {
    setIsLoading(true)
    setIsError(false)
    if (query === '') {
      getHeadlines();
    } else {
      getSearchedNews(query);
    }
  }

  const delayedInputhandle = useRef(_.debounce(q => getNews(q), 500)).current;

  const handleChange = e => {
    delayedInputhandle(e.target.value)
  }

  return (
    <Layout>
      <SearchBar handleChange={handleChange} />
      {isError
        ? <Info
          variant={'danger'}
          message={'Failed to load news!'} />
        : isLoading
          ? <div className="App-spinner"><Spinner animation="border" /></div>
          : <NewsBlock newsArticles={newsArticles} isHeadlines={isHeadlines} />
      }
    </Layout>
  );
}

export default App;
