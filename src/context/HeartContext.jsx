import React, { createContext, useState, useContext } from 'react';

export const IconHeartContext = createContext();

const IconHeartProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState({});

  const toggleIconHeart = (photoId) => {
    setFavoritos((prevFavoritos) => ({
      ...prevFavoritos,
      [photoId]: !prevFavoritos[photoId],
    }));
  };

  return (
    <IconHeartContext.Provider value={{ favoritos, toggleIconHeart }}>
      {children}
    </IconHeartContext.Provider>
  );
};

export default IconHeartProvider;