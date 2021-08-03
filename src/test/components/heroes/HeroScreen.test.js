import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter } from 'react-router'
import '@testing-library/jest-dom'
import { Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('Pruebas del componente <HeroScreen/>', () => {
    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length: 10
    }
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
            <Route
                path="/hero/:heroeId"
                component={()=> <HeroScreen history={historyMock} />}
            />
        </MemoryRouter>
    )
    test('Regresar a la pantalla anterior', () => {
        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledTimes(0)
        expect(historyMock.goBack).toHaveBeenCalled();
    })

    test('mostrar el redirect si no tenemos URL del heroes', () => {
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })

    test('El componente funciona correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h3').text().trim()).toBe('Hulk')
    })
})
