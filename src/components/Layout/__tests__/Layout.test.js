import React from 'react'
import { mount } from 'enzyme'
import Layout from '../Layout'

describe('Layout', () => {
    const props = {
        children: 'Test component'
    }
    it('should render', () => {
        const wrapper = mount(<Layout {...props} />)
        expect(wrapper).toBeTruthy()
    })
})