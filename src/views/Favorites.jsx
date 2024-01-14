import React, { useContext } from 'react';
import { IconHeartContext } from '../context/HeartContext';
import '../components/Favorites.css';

const Favoritos = () => {
  const { favoritos } = useContext(IconHeartContext);
  const favoritosIds = Object.keys(favoritos).filter(id => favoritos[id]);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 p-3 figure-img img-fluid rounded">
        {favoritosIds.map((id) => (
          <div className='photo-container'> 
          <img
            key={id}
            src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
            alt="Favorito"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;