import React from 'react'
import { Spinner } from 'react-bootstrap'
import { mount } from 'enzyme'
import App from './App'
import NewsBlock from './components/NewsBlock/NewsBlock'

describe('App', () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<App />)
    })
    it('should render', () => {
        expect(wrapper).toBeTruthy()
    })
    it('should load spinner', () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    })
    it('should not load NewsBlock', () => {
        expect(wrapper.find(NewsBlock)).toHaveLength(0);
    })
})