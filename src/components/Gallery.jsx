import { useContext } from "react";
import { Jcontext } from "../Jcontext";
import Card from 'react-bootstrap/Card';
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { data } = useContext(Jcontext);

console.log(data);
  return (
    <>
      <div className="gallery grid-columns-5 p-3">
          {data.map((item) =>(
              <Card >
                <Card.Img style={{ height: '14rem'}} variant="top" src={item.src.original} />
                  <IconHeart id={item.id} filled={item.liked}/>
                  <Card.Text style={{ position: 'absolute', color: 'white', top: '150px', left: '5px'}}>
                   {item.alt}
                  </Card.Text>
              </Card>
          ))}
       </div>
    </>
  )
};
export default Gallery;