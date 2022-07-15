import { useState } from "react"
import { AgregarBusqueda, GiftGrid } from './components'


export const GifSearcher = () => {

    const [busqueda, setbusqueda] = useState([])

    const addBusqueda = (nuevaBusqueda) => {
        setbusqueda([nuevaBusqueda ,...busqueda]);
    }

    return (
        <>  
            {/* Título */}
            <h1 className="main-title">Buscador de gifts</h1>

            {/* Buscador */}
            <AgregarBusqueda onAddBusqueda={ (valor) => addBusqueda(valor) } />

            {/* Tarjetas de gifts*/}
            <ul>
                { busqueda.map( (elemento) => {
                    return (
                        <GiftGrid
                            key={Math.random()} 
                            busqueda={elemento}
                        />
                    )
                }) }
            </ul>
        </>
    )
}