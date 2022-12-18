import { Box, Button, Center, Grid, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListChild from './ListChild'
import Footer from "./Footer";

const getData=()=>{
  return fetch(` http://localhost:8080/productlist`).then((res)=>res.json())
}

const ProductList = () => {
  
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const [product,setProduct]=useState([])
  const [flag,setFlag]=useState(false)
  let total=0;
  // let array=JSON.parse(localStorage.getItem('listElement'))||[]
useEffect(()=>
{
  setLoading(true)
  getData().then((res)=>
  {
    setLoading(false)
    setError(false)
    setProduct(res)
  })
  .catch((err)=>
  {
    setLoading(false)
    setError(true)
  })
},[])
if(loading)
{
  return <div>LOADING........</div>
}
if(error)
{
  return <div>ERROR</div>
}

  const handleDelete=async(id)=>
  {
    // console.log(index)
    // array.splice(index,1)
    // localStorage.setItem('listElement',JSON.stringify(array))
    let res= await fetch(` http://localhost:8080/productlist/${id}`,
    {
      method:'DELETE',
      headers:{
        'Content-Type':'application/jaon',
      },
      body:JSON.stringify({id})
    }).then((res)=>res.json())

    getData().then((res)=>
  {
    setLoading(false)
    setError(false)
    setProduct(res)
  })
  .catch((err)=>
  {
    setLoading(false)
    setError(true)
  })
  }
  const handleWishlist=(el)=>
  {
    setFlag(true)
    fetch(' http://localhost:8080/wishlist',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(el)
    }).then((res)=>res.json())
  }
  const handleCheckout=()=>
  {
    navigate("/delivery")
  }
  const handleWishlistBag=()=>{
    navigate("/wishlist")
  }
  return (
    <Grid>
      <Center >
      <Box width='80%' height={'auto'} marginBottom={'5%'}>
       <div className='checkoutDiv'  >
        <Text>YOUR SHOPPING BAG</Text>
        <Button className='checkoutDiv_button' borderRadius={'none'} color={'white'} bgColor={'black'} onClick={handleCheckout}>PROCEED TO CHECKOUT</Button>
       </div>
       <Box width="100%"  height='auto'>
        {
          product.map((el) => (
            <div style={{borderBottom:'1px solid gray',padding:"1rem"}} key={el.id}>
              <ListChild key={el.id} title={el.title} id={el.id} desc={el.subtitle} price={el.discounted_price} image={el.images[el.images.length-1] } quant={el.quantity} getData={getData} setProduct={setProduct} p={el.price} />
              <div className='checkoutDiv'>
              <Button  bgColor={'black'} color={'white'} onClick={()=>handleDelete(el.id)}>X Remove</Button>
              <Popover>
        <PopoverTrigger>
        <Button className='checkoutDiv_button'onClick={()=>handleWishlist(el)}  bgColor={'#c5d5e3'}  >ADD TO WISHLIST <svg style={{marginLeft:'5px'}} width={'18px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></Button>
        </PopoverTrigger>
        {
          flag ? <PopoverContent padding={'20px'}>
          <Text>Successfully added in the Wishlist</Text>
             <Text marginTop={'10px'} fontWeight={'bold'}  >{el.title}</Text>
             <Text marginTop={'10px'}>{el.discounted_price}</Text>
             <Button marginTop={'10px'} backgroundColor={'white'} borderRadius={'none'} color={'white'} bgColor={'black'}onClick={()=>handleWishlistBag(el)}>VIEW WISHLIST BAG<svg style={{marginLeft:'5px'}} width={'18px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></Button>
             <Button marginTop={'10px'} onClick={()=>setFlag(false)} >BACK TO SHOP</Button>
          </PopoverContent>:""
        }
        </Popover>
              </div>
            </div >
          ))
        }
        {
        product.length==0 && 
                <Box borderTop="1px solid grey" m="auto" lineHeight={8}>
                <Text>THERE ARE NO PRODUCTS ON YOUR WISHLIST.</Text>
                 <Text color="grey">Check out our new arrivals and start adding to your wishlist now!</Text>
                 <Button mt={4}> <Link to="/menproduct">SHOP NEW ARRIVALS</Link></Button>
               </Box>
        
       }
        <Box marginTop={'20px'} borderTop={'1px solid gray'} borderBottom={'1px solid gray'}>
          {product.map((el)=>{
            console.log(total+=Number(el.price))
          })}
          <Text fontWeight={'bold'} align={'right'}>Total:- ${total}</Text>
          <br />
          <Button marginBottom={'20px'}  className='checkoutDiv_button'  borderRadius={'none'} color={'white'} bgColor={'black'} onClick={handleCheckout} getData={getData}>PROCEED TO CHECKOUT</Button>
        </Box>
       </Box>
      </Box>
    </Center>
    <Footer />
    </Grid>
    
  )
}

export default ProductList