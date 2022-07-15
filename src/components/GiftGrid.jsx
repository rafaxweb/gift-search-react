import { useEffect, useState } from "react";
import { obtenerGifs } from "../helpers/obtenerGifs";
import { useGifts } from "../hooks/useGifts";
import './GiftGrid.css'

export const GiftGrid = ({ busqueda }) => {

  const { imagenes: gifts, isLoading } = useGifts(busqueda)
  

  return (
    <div>
      <h2>"{busqueda}"</h2>
      <div className="gift-Grid">
        {
          gifts.map( (gifObject) => {
            return (
            <div className="gift-card" key={gifObject.id}>
              <img className="gift-img" src={gifObject.url}></img>
              <p className="gift-text">{gifObject.title}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GiftGrid