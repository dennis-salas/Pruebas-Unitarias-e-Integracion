import React from 'react'
import {mount} from 'enzyme'
import { DashboardRoutes} from '../../routers/DashboardRoutes'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom'

describe('validar componente <DashboardRoutes/>', () => {
    const contexValue ={
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Luisa'
        }
    }

    test('Verificar el nombre del usuario registrado', () => {
        const wrapper = mount(
        <AuthContext.Provider value={contexValue}>
            <MemoryRouter>
                <DashboardRoutes/>
            </MemoryRouter>
        </AuthContext.Provider>  
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Luisa')
    })
})