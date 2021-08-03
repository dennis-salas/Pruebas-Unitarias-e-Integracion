import {mount} from 'enzyme'
import React from 'react'
import { Router } from 'react-router-dom'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../../auth/AuthContext'
import { Navbar } from '../../components/ui/Navbar'
import '@testing-library/jest-dom'


    describe('Pruebas en el componente <Navbar>', () => {
        
        const historyMock ={
            push: jest.fn(),
            replace: jest.fn(),
            location: {},
            listen: jest.fn(),
            createHref: jest.fn()
        }
       
        
        const contexValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Luisa'
            }
        }
    
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <MemoryRouter>
                    <Router history={historyMock}>
                        <Navbar />
                    </Router>   
                </MemoryRouter>
            </AuthContext.Provider>
        )
        test('Validar el contenido el nombre del usuario', ()=>{
            expect (wrapper).toMatchSnapshot();
            expect(wrapper.find('.text-info').text().trim()).toBe('Luisa')
        })
        test('Llamar la funcion logout y usar history', () => {
            wrapper.find('button').prop('onClick')();
            expect(historyMock.replace).toHaveBeenCalledWith('/login')       
        }) 
    
})
