import { useState } from 'react';
import './AgregarBusqueda.css';

export const AgregarBusqueda = ({ onAddBusqueda, busquedaActual }) => {

    const [inputText, setInputText] = useState('')

    const onChange = (event) => {
        setInputText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const text = inputText.trim();
        // Si está vacío no se hace nada
        if(!text) { return }

        onAddBusqueda( text );
        setInputText('')
    }
  
    return (
        <form className="busqueda" onSubmit={ onSubmit }>
            <input 
                className='cuador-busqueda'
                type='text' 
                placeholder='Introduce la búsqueda...'
                value={inputText} 
                onChange={ onChange } 
            />
            <input className='boton-busqueda' type='submit' value='Buscar' />
        </form>
    )
}

export default AgregarBusqueda