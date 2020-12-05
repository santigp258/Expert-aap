import React from "react"; //  {useEffect, useState }
import { useFetchGifts } from "../Hooks/useFetchGifts";
import { GiftGridItem } from "./GiftGridItem";
//import { getGifts } from '../helpers/getGifts';
import "../index.css";

export const GiftGrid = ({ category }) => {
  //desestructuracion from giftExpertApp

  const { data:images, loading } = useFetchGifts(category);

  /* const [images, setImages] = useState([]);
    //se encarga de que no traiga nuevamente la consulta
    useEffect(()=>{
       getGifts(category)
       .then(imgs => setImages(imgs));
    }, [category]); */

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>} {/* //mostrar carga */}
      <div className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
