import React from 'react';
import { useContext } from 'react';
import { IconHeartContext } from '../context/HeartContext';
import IconHeart from './IconHeart';

const BottonCorazon = ({ photoId }) => {
  const { favoritos, toggleIconHeart } = useContext(IconHeartContext);

  return (
    <div>
      <IconHeart filled={favoritos[photoId]} />
      <button onClick={() => toggleIconHeart(photoId)}>♥</button>
    </div>
  );
};

export default BottonCorazon;
