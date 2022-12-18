import { SimpleGrid, Box, Grid, GridItem, Image, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


const ListChild = ({title,desc,id,price,image,quant,getData,setProduct}) => {
  // console.log(quant)
    const [quantity,setQuantity]=useState(1)
    const handleInc=(id)=>
    {
        console.log(id)
        // console.log(quantity)
        setQuantity((prev)=>prev+1)
        fetch(`http://localhost:8080/productlist/${id}`,{
        method:'PATCH',
        headers:{
         'Content-Type':'application/json'
        },
        body:JSON.stringify({quantity:quant+1,price:(quant+1)*(Number(price))})
        }).then((res)=>res.json())
        getData().then((res)=>setProduct(res))
    }
    // console.log(quantity)
    const handleDec=(id)=>
    {
        console.log(id)
        // console.log(quantity)
        // setQuantity((prev)=>prev-1)
        fetch(`http://localhost:8080/productlist/${id}`,{
        method:'PATCH',
        headers:{
         'Content-Type':'application/json'
        },
        body:JSON.stringify({quantity:quant-1,price:(quant-1)*(Number(price))})
        }).then((res)=>res.json())
        getData().then((res)=>setProduct(res))
    }
  
  return (
    <Box key={id} marginTop={'20px'}>
     <SimpleGrid columns={[1,1,1,2,2,2]} spacing={0} p='8' borderTop='1px' borderColor='grey' w={['95%','95%','95%','100%','100%','100%']}>
      <Box height={['260px', '260px','260px','180px','180px','180px']} borderTop='1px' borderColor='grey'>
      <Grid templateColumns={['55% 55%','25% 30%','25% 30%','25% 30%','25% 30%','25% 30%',]} gap={2} mt='4'>
      <GridItem w='100%' h='180px' >
      <Image src={image} alt='product' h='100%' ></Image>
      </GridItem>
  <GridItem w='100%' h='auto' >
    <Box align='left' mt='6'>{title}</Box>
    <Box align='left'>{desc}</Box>
    <Box align='left'>Size:   <span>size</span></Box>
    <Box align='left'>item no.:   <span>{id}</span> </Box>
  </GridItem>
</Grid>
  </Box>
  <Box height='auto' align='left'  borderTop='1px' borderColor='grey'>
     <Box h='auto' w='50%' mt='-8'>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Price</GridItem>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Quantity</GridItem>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Subtotal</GridItem>
</Grid>
<Grid templateColumns='repeat(5, 1fr)' gap={6} >
  <GridItem w='100%' h='10' align='center' opacity='80%' >${price}</GridItem>
  <button style={{backgroundColor:'rgb(240, 240, 240)'}}  disabled={quant==1} onClick={()=>handleDec(id)}>-</button>
  <GridItem w='100%' h='10' align='center'>{quant}</GridItem>
  <button style={{backgroundColor:'rgb(240, 240, 240)'}} onClick={()=>handleInc(id)}>+</button>
  <GridItem w='100%' h='10' align='center' opacity='80%' >{quant*(Number(price))}</GridItem>
</Grid>
     </Box>
  </Box>
</SimpleGrid>
    </Box>
  )
}

export default ListChild