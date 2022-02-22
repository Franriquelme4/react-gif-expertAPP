import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(()=>{
    getGifts(category)
        .then(img =>{
            setTimeout(() => {
                setState({
                    data:img,
                    loading:false
                })
            }, 2000);
           
        })
},[category])


  return state;
};
