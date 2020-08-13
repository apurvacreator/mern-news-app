import React from 'react'
import { mount } from 'enzyme'
import NewsBlock from '../NewsBlock'
import NewsItem from '../NewsItem';

const props = {
    newsArticles: [{
        urlToImage: "https://cbsnews3.cbsistatic.com/hub/i/r/2020/08/12/620d4e6e-bcfa-45af-8599-ba9972b6f17d/thumbnail/1200x630/7c2070a64901e2f363b1d75058f86ce8/gettyimages-1180699958.jpg",
        title: 'This is a test news',
        url: 'https://www.cbsnews.com/news/big-12-college-football-2020-season-big-ten-pac-12-postponements/',
        date: '2020-08-13T11:46:00Z'
    }],
    isHeadlines: false
}

describe('NewsBlock', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<NewsBlock {...props} />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should render NewsItem component', () => {
        expect(wrapper.prop('newsArticles')).toEqual(props.newsArticles)
        expect(wrapper.find(NewsItem)).toHaveLength(1)
    })
})