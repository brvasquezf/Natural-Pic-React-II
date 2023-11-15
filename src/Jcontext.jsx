import {createContext, useState} from "react";
import { getData } from "./Hooks/getData";
export const Jcontext = createContext({})


export const ContextProvider = ( {children} ) => {
    const { data, setData } = getData()
    const [filled, setFilled] = useState(false)
    const [dataLiked, setDataLiked] = useState()
    const sharedState = {
              data, 
              setData,
              filled,
              setFilled,
              dataLiked,
              setDataLiked
    };  
  return (
    <Jcontext.Provider value={sharedState}>
        {children}
    </Jcontext.Provider>
  )
}
export default ContextProvider;
