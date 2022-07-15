import { useEffect, useState } from "react";
import { obtenerGifs } from "../helpers/obtenerGifs";
import { useGifts } from "../hooks/useGifts";
import { Gift } from "./Gift";
import './GiftGrid.css'

export const GiftGrid = ({ busqueda }) => {

  const { imagenes: gifts, isLoading, setGifts } = useGifts(busqueda)

  const onEliminarGift = (id) => {
    console.log(id);
    
    const nuevaBusqueda = gifts.filter( (elemento) => elemento.id !== id)
      
    setGifts(nuevaBusqueda)
  }

  return (
    <div>
      <h2>Resultados de la búsqueda "{busqueda}"</h2>
      <div className="gift-Grid">
        {
          gifts.map( (gifObject) => {
            return (
              <Gift 
                key={gifObject.id}
                id={gifObject.id}
                onEliminarGift={onEliminarGift}
                url={gifObject.url}
                title={gifObject.title}
              />


            )
          })
        }
      </div>
    </div>
  )
}

export default GiftGrid