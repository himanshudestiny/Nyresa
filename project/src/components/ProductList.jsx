import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SimpleGrid, Grid, GridItem } from '@chakra-ui/react'


const ProductList = () => {
  const [quantity,setQuantity]=useState(1)
  let array=JSON.parse(localStorage.getItem('listElement'))||[]

  const handleDelete=(index)=>
  {
    console.log(index)
    array.splice(index,1)
    localStorage.setItem('listElement',JSON.stringify(array))
  }
 
  console.log(array)
  return (
    <Center>
      <Box width='80%' border={'1px solid red'} height={'400px'}>
       <Flex justifyContent={'space-around'} >
        <Text>YOUR SHOPPING BAG</Text>
        <Button borderRadius={'none'} color={'white'} bgColor={'black'}>PROCEED TO CHECKOUT</Button>
       </Flex>
       <Box width="100%" border={'1px solid blue'} height='90%'>
        {/* product list  */}
       {
        array.map((el,index)=>(
          <Box key={el.id} marginTop={'20px'} borderBottom={'1px solid gray'} >
    <SimpleGrid columns={[1,1,1,2,2,2]} spacing={0} p='8' borderTop='1px' borderColor='grey' w={['95%','95%','95%','100%','100%','100%']}>
  <Box height={['260px', '260px','260px','180px','180px','180px']} borderTop='1px' borderColor='grey'>
  <Grid templateColumns={['55% 55%','25% 30%','25% 30%','25% 30%','25% 30%','25% 30%',]} gap={2} mt='4'>
  <GridItem w='100%' h='180px' >
    <Image src={el.images[el.images.length-1]} alt='product' h='100%' ></Image>
  </GridItem>
  <GridItem w='100%' h='auto' >
    <Box align='left' mt='6'>{el.title}</Box>
    <Box align='left'>desc</Box>
    <Box align='left'>Size:   <span>size</span></Box>
    <Box align='left'>item no.:   <span>{el.id}</span> </Box>
    <Button onClick={()=>handleDelete(index)}>X Remove</Button>
  </GridItem>
</Grid>
  </Box>
  <Box height='auto' align='right'  borderTop='1px' borderColor='grey'>
     <Box h='120%' w='50%' mt='-8'>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Price</GridItem>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Quantity</GridItem>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Subtotal</GridItem>
</Grid>
<Grid templateColumns='repeat(5, 1fr)' gap={6} >
  <GridItem w='100%' h='10' align='center' opacity='80%' >{el.discounted_price}</GridItem>
  <button style={{backgroundColor:'rgb(240, 240, 240)'}}  disabled={quantity==1} onClick={()=>setQuantity((prev)=>prev-1)}>-</button>
  <GridItem w='100%' h='10' align='center' >{quantity}</GridItem>
  <button style={{backgroundColor:'rgb(240, 240, 240)'}} onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
  <GridItem w='100%' h='10' align='center' opacity='80%' >{Number(el.discounted_price)*quantity}</GridItem>
</Grid>
     </Box>
  </Box>
</SimpleGrid>
    </Box>
        ))
       }



       </Box>
    </Box>
    </Center>
  )
}

export default ProductList