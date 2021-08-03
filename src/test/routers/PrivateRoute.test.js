import { PrivateRoute } from '../../routers/PrivateRoute'
import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

describe('Validar la rutas privadas', () => {

    Storage.prototype.setItem = jest.fn()

    const props = {
        location: {
            pathname: './marvel'
        }
    }

    test('mostrar el componente si el usuario esta autenticado', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Componente</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        console.log(wrapper.html());
        expect(wrapper.find('span').exists()).toBe(true)
    })

    test('usuario no autenticado', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Componente</span>}
                    {...props}
                />
            </MemoryRouter>
        )
        console.log("xxxx" + wrapper.html() + "xxxx");

        expect(wrapper.find('span').exists()).toBe(false);
    })


})