import './GiftGrid.css'

export const Gift = ( { id, onEliminarGift, url, title } ) => {

    return (
        <div className="gift-card" key={id}>
          <button className='gift-buttom' onClick={ () => onEliminarGift(id) }>Eliminar</button>
          <img className="gift-img" src={url}/> 
          <p className="gift-text">{title}</p>
        </div>
        )
      
}
