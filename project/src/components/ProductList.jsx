import { Box, Button, Center, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListChild from './ListChild'

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
  const handleCheckout=()=>
  {
    navigate("/delivery")
  }
  return (
    <Center>
      <Box width='80%' height={'400px'}>
       <div className='checkoutDiv' >
        <Text>YOUR SHOPPING BAG</Text>
        <Button className='checkoutDiv_button' borderRadius={'none'} color={'white'} bgColor={'black'} onClick={handleCheckout}>PROCEED TO CHECKOUT</Button>
       </div>
       <Box width="100%"  height='auto'>
        {
          product.map((el) => (
            <div style={{borderBottom:'1px solid gray',padding:"1rem"}} key={el.id}>
              <ListChild key={el.id} title={el.title} id={el.id} desc={el.subtitle} price={el.discounted_price} image={el.images[el.images.length-1] } quant={el.quantity} />
              <div className='checkoutDiv'>
              <Button  bgColor={'red'} color={'white'} onClick={()=>handleDelete(el.id)}>X Remove</Button>
              <Button className='checkoutDiv_button'>Add To Wishlist</Button>
              </div>
            </div >
          ))
        }
        <Box>
          {product.map((el)=>{
            console.log(total+=Number(el.discounted_price))
          })}
          <Text fontWeight={'bold'} align={'right'}>Total:- ${total}</Text>
          <br />
          <Button  className='checkoutDiv_button'  borderRadius={'none'} color={'white'} bgColor={'black'} onClick={handleCheckout}>PROCEED TO CHECKOUT</Button>
        </Box>
       </Box>
    </Box>
    </Center>
  )
}

export default ProductList