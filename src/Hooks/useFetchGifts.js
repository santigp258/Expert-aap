import { useEffect, useState } from "react";
import { getGifts } from '../helpers/getGifts';
export const useFetchGifts = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
        .then(imgs =>{
            setTimeout(()=>{
                setState({
                    data: imgs,
                    loading: false
                })
            }, 1500);
        })
    }, [category])
    

    return state; // {data: [], loading: true}
};
