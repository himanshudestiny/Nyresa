import { Box, Button, Grid, Image, Text, useToast } from '@chakra-ui/react';
import axios from "axios"
import "./Products.css"
import {CloseIcon, StarIcon} from "@chakra-ui/icons"
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const getwish=async()=>{
  let res=await axios.get("http://localhost:8080/wishlist")
  return res.data;


}



const Wishlist = () => {

  const [wish,setwish]=useState([]);
  const toast=useToast();

  const remove=async(id)=>{
    let res=await axios.delete(`http://localhost:8080/wishlist/${id}`);
    
       let updt =wish.filter((el)=>
       el.id!==id
       )

       setwish(updt);
  
  }

   const movecart= async(elem)=>{

   let res=await axios.post("http://localhost:8080/productlist",{
    ...elem
   })
   
   if(res.data){

   
   remove(res.data.id);
   
   toast({
    title: 'ITEM MOVED TO BAG SUCCESSFULLY',
    position: 'top',
    description: "Happy shopping",
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
  
     
}

  }


  useEffect(()=>{
    getwish().then((res)=>setwish(res));

  },[])



  return (
   <Box p={5}>

       {
        wish.length==0 && 
               <Box borderTop="1px solid grey" m="auto" lineHeight={8}>
             <Text>THERE ARE NO PRODUCTS ON YOUR WISHLIST.</Text>
             <Text color="grey">Check out our new arrivals and start adding to your wishlist now!</Text>
             <Button mt={4}> <Link to="/menproduct">SHOP NEW ARRIVALS</Link></Button>

               </Box>
        
       }

    <Grid  templateColumns={{sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="30px" justifyContent="space-between">
        
        {
            wish.map((el)=>
              <Box key={el.id} w="80%" >
               <Box width="240px" m="auto" textAlign="right" cursor="pointer"> <CloseIcon opacity="40%" onClick={()=>remove(el.id)}/></Box>

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

              <Button className="endbut" borderRadius={0}   w="240px"  color="white" backgroundColor="black" mt={5} onClick={()=>movecart(el)}>MOVE TO BAG</Button>

              </Box>
            )
        }

    </Grid>
   
   </Box>
  )
}

export default Wishlist