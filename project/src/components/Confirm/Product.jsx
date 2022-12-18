import React from 'react'

import { SimpleGrid, Box, Grid, GridItem, Image } from '@chakra-ui/react'

const Product = ({title, desc, price, quantity, subTotal, size, itemNo, image}) => {
  return (
    <div>
    <SimpleGrid columns={[1,1,1,2,2,2]} spacing={0} p='8' borderTop='1px' borderColor='grey' w={['95%','95%','95%','100%','100%','100%']}>
  <Box height={['260px', '260px','260px','180px','180px','180px']} borderTop='1px' borderColor='gray.300'>
  <Grid templateColumns={['55% 55%','25% 30%','25% 30%','25% 30%','25% 30%','25% 30%',]} gap={2} mt='4'>
  <GridItem w='100%' h='180px' >
    <Image src={image} alt='product' h='100%' ></Image>
  </GridItem>
  <GridItem w='100%' h='auto' >
    <Box align='left' mt='6'>{title}</Box>
    <Box align='left'>{desc}</Box>
    <Box align='left'>Size:   <span>{size}</span></Box>
  </GridItem>
</Grid>
  </Box>
  <Box height='auto' align='right'  borderTop='1px' borderColor='gray.300'>
     <Box h='120%' w='50%' mt='-8'>
     <Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Price</GridItem>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Quantity</GridItem>
  <GridItem w='100%' h='10' align='center' fontWeight='bolder' >Subtotal</GridItem>
</Grid>
<Grid templateColumns='repeat(3, 1fr)' gap={6} >
  <GridItem w='100%' h='10' align='center' opacity='80%' >${price}</GridItem>
  <GridItem w='100%' h='10' align='center' >{quantity}</GridItem>
  <GridItem w='100%' h='10' align='center' opacity='80%' >${subTotal}</GridItem>
</Grid>
     </Box>
  </Box>
</SimpleGrid>
    </div>
  )
}

export default Product
