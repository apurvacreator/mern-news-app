import React from 'react'
import { mount } from 'enzyme'
import Info from '../Info'

describe('Info', () => {
    const props = {
        message: 'No results found',
        variant: 'primary'
    }
    it('should render', () => {
        const wrapper = mount(<Info {...props} />)
        expect(wrapper).toBeTruthy()
    })
})