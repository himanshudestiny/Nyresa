import React from 'react'
import "./Products.css"
import { useState } from 'react'
import { Box, Divider, Flex, Grid, GridItem, Image, Progress, Select, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'

import Header from '../components/sidebar/Header'
import Sidebar from '../components/sidebar/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import { getdata } from '../redux/products/Prodaction'
import { StarIcon } from '@chakra-ui/icons'
import Pagination from './Pagination'

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
       
    setsort("discounted_price");
    setorder(val);
  }

 
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

           {products.loading &&
            <Box>

            <h1>Loading ....</h1>
            <Progress size='xs' isIndeterminate />
            </Box>
            }

        <Grid p={6} templateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="20px">
          {
            products.data?.map((el)=>
            <Box key={el.id} border="1px solid black" textAlign="center">

              <Image m="auto" src={el.images[0]} width="240px" height="260px" alt='title' />
              <Text mt={2}>{el.title}</Text>

              <Text className='subtitle'>{el.subtitle}</Text>
         
              <Box display='flex'  w="30%"  m="auto" mt={2}  alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < Math.floor(el.rating) ? "yellow.400" : 'gray.300'}
                
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {el.rating}
          </Box>
        </Box>

              <Box className='price' ><b>€{el.discounted_price}</b> 
              <Text color="grey"  textDecoration="line-through">€{el.strike_price}</Text>
                <Text color="orange.500">{el.discount}</Text>
              </Box>

            </Box>
            )
          }
        </Grid>

       

        <Box>
        
        <Box mt="15px"  width={{sm:"100%",md:"50%",lg:"40%"}} m="auto"><Pagination count={10}  currentPage={page}  updateCurrentPage={(pan)=>setpage(pan)}/></Box>

      </Box>

            


      </Box>

      
      </Box>
      
    </>
  )
}

export default Products