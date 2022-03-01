import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import { render } from '@testing-library/react';
import App from '../App';
import AddPokemon from '../pages/AddPokemon';



describe('AddPokemon', () => {
    it('Elformulario debe tener un label que diga: Nombre', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[0]
        expect(elemento.innerHTML).toBe('Nombre')
        
    });
    it('Elformulario debe tener un label que diga: Vida"', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[1]
        expect(elemento.innerHTML).toBe('Vida')
        
    });
    it('Elformulario debe tener un label que diga: Fuerza', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[2]
        expect(elemento.innerHTML).toBe('Fuerza')
        
    });
    it('Elformulario debe tener un lebel que diga: Defensa', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[3]
        expect(elemento.innerHTML).toBe('Defensa')
        
    });
    it('Elformulario debe tener un label que diga: Velocidad', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[4]
        expect(elemento.innerHTML).toBe('Velocidad')
        
    });
    it('Elformulario debe tener un label que diga: Altura', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[5]
        expect(elemento.innerHTML).toBe('Altura')
        
    });
    it('Elformulario debe tener un label que diga: Peso', () =>{
        const { container } = render(<Provider store={store}><BrowserRouter><App/><AddPokemon/></BrowserRouter></Provider>)
        const elemento = container.querySelectorAll('label')[6]
        expect(elemento.innerHTML).toBe('Peso')
        
    });
})