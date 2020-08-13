import React from 'react'
import { mount } from 'enzyme'
import Header from '../Header'

describe('Header', () => {
    it('should render', () => {
        const wrapper = mount(<Header />)
        expect(wrapper).toBeTruthy()
    })
})