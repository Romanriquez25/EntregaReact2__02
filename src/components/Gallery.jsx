
import { useEffect, useState, useContext } from "react";
import { IconHeartContext } from "../context/HeartContext";
import "../components/Gallery.css";
import BottonCorazon from "./BotonCorazon";
const Gallery = () => {
  
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/search/?page=1&per_page=15&query=nature', {
          headers: {
            Authorization: 'gKMlEsU9jyiDIxhGoztduTKhAq1C1KDVdcFgHzy48fF8Ta4HAlocWeyr', 
          }
        });

        if (!response.ok) {
          throw new Error('Error al obtener las fotos');
        }

        const data = await response.json();
        setPhotos(data.photos);
        console.log(data.photos);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPhotos();
  }, []);
  
  
  return <div className="gallery grid-columns-5 p-3 figure-img img-fluid rounded">
    {photos.map((photo) => (
      <div className="photo-container" key={photo.id}>
        <img src={photo.src.large} alt={photo.photographer} />
        <div className="cajaBotton"><BottonCorazon photoId={photo.id} /></div>
      </div>
      
    ))}
  </div>;
};
export default Gallery;
