import React from 'react'
import "./Products.css"
import { useState } from 'react'
import { Box, Divider, Grid, GridItem, Image, Select, Text, useBreakpointValue } from '@chakra-ui/react'

import Header from '../components/sidebar/Header'
import Sidebar from '../components/sidebar/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import { getdata } from '../redux/products/Prodaction'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }




const Products = () => {

  const [page,setpage]=useState(1);
  const [sort,setsort]=useState("");
  const [order,setorder]=useState("");

  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const products=useSelector((store)=>store.prodManager);

  const dispatch=useDispatch();

  useEffect(()=>{

     dispatch(getdata(page,sort,order))
  },[page,sort,order])

  const sortorder=(val)=>{
       
    setsort("strike_price");
    setorder(val);
  }

  console.log(page);

  console.log(products);

  return (
    <>
    <Box display="flex" justifyContent="space-between" border="1px solid black">
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box  width="100%">
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}

          count={10}
          page={page}
          updateCurrentPage={(pan)=>setpage(pan)}

          sortorder={sortorder}
        />


       


        <Divider/>

        <Grid templateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="20px">
          {
            products.data.map((el)=>
            <Box key={el.id}>

              <Image src={el.images[0]} width="100%" alt='title' />

            </Box>
            )
          }
        </Grid>

        <Box>
        

      </Box>

            


      </Box>

      
      </Box>
      
    </>
  )
}

export default Products