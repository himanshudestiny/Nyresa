import { Box, Button, Center, color, Flex, Heading, Image, Input, MenuOptionGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Select, Text, textDecoration } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../components_css/ProductDetails.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SizeChart from '../image/SizeChart.jpeg'
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer"
import Carousel from './Carousel';
import data from "../assets/data/products.json";
let count=0;
const ProductDetails = () => {
  const navigate=useNavigate()
  const [flag,setFlag]=useState(false)
 

let element=JSON.parse(localStorage.getItem("element"))
  useEffect(()=>
  {
    element=JSON.parse(localStorage.getItem("element"))||{}
  },[element])
  const handleAddtobag=(e)=>
  {
    // console.log('click')
    count++;//1
    // console.log(count)
    if(count>=2)
    {
      setFlag(true)
      // console.log(flag)
    }
    else if(count<=1)
    {
      handlechangesize(e)
    }
  }
  // console.log(flag)


  const handlewishlist=(e)=>
  {
    // console.log('click')
    count++;
    // console.log(count)
    if(count>1)
    {
      setFlag(true)
      // console.log(flag)
      count++
    }
    else if(count<=1)
    {
      handlechangesize(e)
    }
  }
  
  const handleShopingBag=(el)=>{
    console.log(el)
    fetch(' http://localhost:8080/productlist',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(el)
    }).then((res)=>res.json())
    navigate("/ProductList")
  }
  const handleWishlistBag=(el)=>
  {
    fetch(' http://localhost:8080/wishlist',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(el)
    }).then((res)=>res.json())
    navigate("/wishlist")
  }
  const handlechangesize=(e)=>
  {
    let value=e.target.value
    localStorage.setItem("ElementSize",JSON.stringify(value))
    if(!value)
    {
      alert('please Select size')
    }
    else if(value)
    {
      count++
    }
  }

  const handlePrev=()=>
  {
    console.log('click')
  }
  const handleNext=()=>
  {
    console.log('click')
  }
  return (
    <Box marginTop={'40px'}  > 
    <Center >
       <Box className="Product_details_Mega_container" bgColor={'RGBA(0, 0, 0, 0.06)'} padding='20px'>
      <div className='Product_details_Mega_container_first_child'>
       {/* <Button boxShadow={'RGBA(0, 0, 0, 0.24) 0px 3px 8px'} pos={'relative'} top={'50%'} left='10%' >{'<'}</Button> */}
        <Image borderRadius='10px'  boxShadow={'RGBA(0, 0, 0, 0.24) 0px 3px 8px'} width={'85%'} height={'98%'} margin={'auto'} src={element.images[element.images.length-1]}  alt='Dan Abramov'/> 
        {/* <Button boxShadow={'RGBA(0, 0, 0, 0.24) 0px 3px 8px'} pos={'relative'} top={'50%'} right='10%' >{'>'}</Button> */}
      </div>
      <div className='Product_details_Mega_container_second_child' >
        <Text margin={'20px'} fontSize={'20px'} fontWeight={'bold'}>{element.title}</Text>
        <Text margin={'20px'}>{element.subtitle}</Text>
        <Flex><Text marginLeft={'20px'} fontWeight={'bold'}>$ {element.discounted_price}</Text><Text marginLeft={'20px'} textDecorationLine={'line-through'}>$ {element.strike_price}</Text></Flex>
        <Text color={'red'} margin={'20px'}>{element.discount}</Text>
        <Text margin={'20px'} fontSize={'14px'}>Ratings - {element.rating}*</Text>
        <Select className='option' onChange={handlechangesize} marginLeft={'20px'} placeholder='Choose Size' >
        <option value={element.size[0]}>{element.size[0]}</option>
        <option value={element.size[1]}>{element.size[1]}</option>
        <option value={element.size[2]}>{element.size[2]}</option>
        <option value={element.size[3]}>{element.size[3]}</option>
        <option value={element.size[4]}>{element.size[4]}</option>
        <option value={element.size[5]}>{element.size[5]}</option>
        </Select>
        <Popover>
        <PopoverTrigger>
        <Text margin={'20px'}>{'> Size Chart'}</Text>
        </PopoverTrigger>
        <PopoverContent>
        <Image src={SizeChart} />
        </PopoverContent>
        </Popover>
        <br />
        <Popover>
        <PopoverTrigger>
        <Button marginLeft={'20px'} onClick={handleAddtobag} borderRadius={'none'} color={'white'} bgColor={'black'}>ADD TO SHOPPING BAG</Button>
        </PopoverTrigger>
        {
          flag ? <PopoverContent padding={'20px'}>
            <Text>Successfully added in the bag</Text>
             <Text marginTop={'10px'} fontWeight={'bold'}  >{element.title}</Text>
             <Text marginTop={'10px'}>{element.discounted_price}</Text>
             <Button marginTop={'10px'} borderRadius={'none'} color={'white'} bgColor={'black'} onClick={()=>handleShopingBag(element,element.id)}>VIEW SHOPPING BAG</Button>
             <Button marginTop={'10px'} onClick={()=>setFlag(false)}>BACK TO SHOP</Button>
          </PopoverContent>:""
        }
        </Popover>
        <br />
        <Popover>
        <PopoverTrigger>
        <Button margin={'20px'} backgroundColor={'white'} onClick={handlewishlist} borderRadius={"none"} >ADD TO WISHLIST <svg style={{marginLeft:'5px'}} width={'18px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></Button>
        </PopoverTrigger>
        {
          flag ? <PopoverContent padding={'20px'}>
          <Text>Successfully added in the Wishlist</Text>
             <Text marginTop={'10px'} fontWeight={'bold'}  >{element.title}</Text>
             <Text marginTop={'10px'}>{element.discounted_price}</Text>
             <Button marginTop={'10px'} backgroundColor={'white'} borderRadius={'none'} color={'white'} bgColor={'black'}onClick={()=>handleWishlistBag(element)}>VIEW WISHLIST <svg style={{marginLeft:'5px'}} width={'18px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></Button>
             <Button marginTop={'10px'} onClick={()=>setFlag(false)} >BACK TO SHOP</Button>
          </PopoverContent>:""
        }
        </Popover>
        <Text margin={'20px'}>Free Shipping avaliable</Text>
        <Box marginLeft={'20px'}>
          <Text >Product Material Details</Text>
          <Text>Cotton</Text>
        </Box>
      </div>
    </Box>
    <br />
    </Center>
    <br />
    <br />
    <Carousel
        link={"/menproduct"}
        title="Men's New Arrivals"
        data={data.Mens}
      />
      <Carousel
        link={"/womenproduct"}
        title="Women's New Arrivals"
        data={data.Womens}
      />
      <Carousel
        link={"/kidproduct"}
        title="Kid's New Arrivals"
        data={data.Kids} 
        />
    <Footer />
    </Box>
  )
}

export default ProductDetails

// width={'70%'} height={"600px"} margin={'auto'} border={'1px solid red'}

{/* <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody> */}