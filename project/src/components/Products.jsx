import React from 'react'
import "./Products.css"
import { useState } from 'react'
import { Box, Divider, Flex, Grid, GridItem, Heading, Image, Progress, Select, Spinner, Text, useBreakpointValue } from '@chakra-ui/react'

import Header from '../components/sidebar/Header'
import Sidebar from '../components/sidebar/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import { filterdata, getdata } from '../redux/products/Prodaction'
import { StarIcon } from '@chakra-ui/icons'
import Pagination from './Pagination'
import {Navigate, useNavigate } from 'react-router-dom'
import Footer from "./Footer";

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }




const Products = ({category}) => {

  const [page,setpage]=useState(1);
  const [sort,setsort]=useState("");
  const [order,setorder]=useState("");
  const [filtval,setfiltval]=useState("");
  const [normal,setnormal]=useState(false);

  const navigate=useNavigate()

  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const products=useSelector((store)=>store.prodManager);

  const dispatch=useDispatch();

  const tognormal=(val)=>{
    setnormal(true)
    setfiltval(val);
  }

  const norm=()=>{
    setnormal(false);
  }

  useEffect(()=>{

    if(normal===false){
      dispatch(getdata(page,sort,order,category))
    }

   else{
    dispatch(filterdata(filtval,page,sort,order,category))
   }

  },[page,sort,order,category])


  const sortorder=(val)=>{
       
    setsort("discounted_price");
    setorder(val);
  }

 const tolocal=(el)=>{

  localStorage.setItem("element",JSON.stringify(el));
  navigate("/ProductDetails")
  // return <Navigate to="/ProductDetails"/>
 }
 
 
 
  return (
    <>
    <Box display="flex" justifyContent="space-between" marginBottom={'2%'} marginTop={'2%'} >
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}

        page={page}
        sort="discounted_price"
        order={order}

        tognormal={tognormal}
        norm={norm}
        category={category}
      />
      <Box  width="100%">
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}

          count={10}
          page={page}
          updateCurrentPage={(pan)=>setpage(pan)}

          sortorder={sortorder}

          category={category}
        />


       

        <Divider/>

           {products.loading &&
            <Box>

            <Heading>Loading ....</Heading>
            <Progress size='xs' isIndeterminate />
            </Box>
            }

               {
                products.data.length==0 && <Box >
                  <Image boxSize="400px" m="auto" src='https://upload.wikimedia.org/wikipedia/commons/2/22/Sad.gif'/>
                 <Heading>Results not found for this page</Heading>  
                 </Box>
               }

        <Grid p={6} templateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="20px">
           {
            products.data?.map((el)=>
          <Box key={el.id} className="eldiv" onClick={()=>tolocal(el)}  textAlign="center">
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
      <Footer />
    </>
  )
}

export default Products