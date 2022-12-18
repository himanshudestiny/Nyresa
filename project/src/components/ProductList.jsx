import { Box, Button, Center, Text } from '@chakra-ui/react'
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
  return (
    <Center display={'grid'}>
      <Box width='80%' height={'400px'} marginBottom={'5%'}>
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
              <Button  bgColor={'red'} color={'white'} onClick={()=>handleDelete(el.id)}>X Remove</Button>
              <Button className='checkoutDiv_button' bgColor={'#c5d5e3'}onClick={()=>handleWishlist(el)} >Add To Wishlist</Button>
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
  )
}

export default ProductList