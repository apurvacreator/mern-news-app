import React from 'react'
import { mount } from 'enzyme'
import NewsItem from '../NewsItem'

const news = {
    urlToImage: "https://cbsnews3.cbsistatic.com/hub/i/r/2020/08/12/620d4e6e-bcfa-45af-8599-ba9972b6f17d/thumbnail/1200x630/7c2070a64901e2f363b1d75058f86ce8/gettyimages-1180699958.jpg",
    title: 'This is a test news',
    url: 'https://www.cbsnews.com/news/big-12-college-football-2020-season-big-ten-pac-12-postponements/',
    date: '2020-08-13T11:46:00Z'
}

describe('NewsItem', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<NewsItem {...news} />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
    it('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})