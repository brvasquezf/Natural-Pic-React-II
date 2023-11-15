import Card from 'react-bootstrap/Card';
import IconHeart from "../components/IconHeart";
import { Jcontext } from '../Jcontext';
import { useContext } from "react";

const Favorites = () => {
  const { dataLiked } = useContext(Jcontext);
  return (
    <>
    {dataLiked === undefined || dataLiked === null ?
      <>
      <h2> Para visualizar una imagen favorita, primero debe seleccionar una imagen como favorita de la galeria de imagenes presionando el "❤️" que aparece sobre la imagen</h2>
      </>
    :
    <div className="App">
      <h1>Fotos favoritas</h1>
      
      <div className="p-3 gallery grid-columns-4">
        {dataLiked.map((item) =>(
            <Card >
              <Card.Img style={{ height: '14rem'}} variant="top" src={item.src.original} />
                <IconHeart id={item.id} filled={item.liked}/>
                <Card.Text style={{ position: 'absolute', color: 'white', top: '150px', left: '5px'}}>
                 {item.alt}
                </Card.Text>
            </Card>
  
        ))}
      </div>
    </div>
    }
    </>
  );
};
export default Favorites;