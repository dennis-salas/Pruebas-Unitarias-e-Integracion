import React from 'react'
import {mount} from 'enzyme'
import { AppRouter} from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'
import '@testing-library/jest-dom'

describe('pruebas en <AppRouter/>', () => {
    const contexValue ={
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('Mostrar login si no esta autenticado', () => {
        const wrapper = mount(
        <AuthContext.Provider value={contexValue}>
             <AppRouter />
        </AuthContext.Provider>  
        )
        expect(wrapper).toMatchSnapshot();
    })

    test('Mostrar el componente de marvel al usuario autenticado', () => {
        const contexValue ={
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Luisa'
            }
        }
        const wrapper = mount(
        <AuthContext.Provider value={contexValue}>
             <AppRouter />
        </AuthContext.Provider>  
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })

})
