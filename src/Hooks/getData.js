import axios from "axios";
import { useEffect, useState } from "react";


export const getData = () => {
  const [data, setData] = useState({})
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
      const PHOTO_URL = "./photos.json";
          (async () =>{
            try {
              const result = await axios.get(PHOTO_URL);
              const response = await result.data;
              const photo = await response.photos;
              setData(photo);
              setIsLoad(true);
            } catch (err) {
              console.error("Error al cargar datos de la API:", err);
            }
          })()
    },[])
        

      return { isLoad, setIsLoad, data, setData }
}