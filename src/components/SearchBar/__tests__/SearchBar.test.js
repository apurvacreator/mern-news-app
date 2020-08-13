import React from 'react'
import { mount } from 'enzyme'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
    const props = {
        handleChange: jest.fn()
    }
    it('should render', () => {
        const wrapper = mount(<SearchBar {...props} />)
        expect(wrapper).toBeTruthy()
    })
})