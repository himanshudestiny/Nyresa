/* eslint-disable array-callback-return */
import axios from "axios";
import { GET_PRODUCT, Loading, Filter } from "./ProdactionTypes";

export const getdata = (cat = "Mens",page = 1, sort , order, val) => async (dispatch) => {
    dispatch({ type: Loading });

    try {

     if(cat!=="" && page!=="" && sort!=="" && order!=="" &&  val!==""){

      let res = await axios.get(
        `https://nyresa-project-server.onrender.com/${cat}?_page=${page}&_limit=30&_sort=${sort}&_order=${order}`
      );
       
      let filtered = res.data.filter((el) => {
              if (el.subtitle !== null && el.subtitle.includes(val)) {
                return el;
              }
            });


      dispatch({ type: GET_PRODUCT, payload: filtered });

     }

     else if(cat!=="" && page!=="" && sort!=="" && order!==""){

      let res = await axios.get(
        `https://nyresa-project-server.onrender.com/${cat}?_page=${page}&_limit=12&_sort=${sort}&_order=${order}`
      );

      dispatch({ type: GET_PRODUCT, payload: res.data });

     }

     else if(cat!=="" && page!=="" && val!==""){
            
      let res = await axios.get(
        `https://nyresa-project-server.onrender.com/${cat}?_page=${page}&_limit=30`
      );
       
      let filtered = res.data.filter((el) => {
              if (el.subtitle !== null && el.subtitle.includes(val)) {
                return el;
              }
            });


      dispatch({ type: GET_PRODUCT, payload: filtered });

     }

     else {
           
      let res = await axios.get(
        `https://nyresa-project-server.onrender.com/${cat}?_page=${page}&_limit=12`
      );

      dispatch({ type: GET_PRODUCT, payload: res.data });
     }
      


    } catch (e) {
      console.log(e);
    }
  };




// export const filterdata =
//   (val, page, sort = "discounted_price", order = "", cat = "Mens") =>
//   async (dispatch) => {
//     dispatch({ type: Loading });

//     let res = await axios.get(
//       `https://nyresa-database.vercel.app/${cat}?_page=${page}&_limit=30&_sort=${sort}&_order=${order}`
//     );

//     let filtered = res.data.filter((el) => {
//       if (el.subtitle !== null && el.subtitle.includes(val)) {
//         return el;
//       }
//     });

//     dispatch({ type: Filter, payload: filtered });
//   };
