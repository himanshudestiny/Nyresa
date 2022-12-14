import axios from "axios";
import { GET_PRODUCT,Loading } from "./ProdactionTypes";

export const getdata=(page=1,sort="",order="",cat="Mens")=>async(dispatch)=>{

    dispatch({type:Loading})

    try{
         let res=await axios.get(`http://localhost:8080/${cat}?_page=${page}&_limit=10&_sort=${sort}&order=${order}`);

         dispatch({type:GET_PRODUCT,payload:res.data});
    }
    catch(e){
        console.log(e);
    }

}