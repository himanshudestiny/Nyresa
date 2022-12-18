import React from 'react'
import Header from './Header';
import jcb from "./jcb.png";
import masterCard from "./masterCard.jpg";
import unionPay from "./unionPay.png";
import visa from "./visa.png";
import americanExpress from "./americanExpress.png";
import dinersClub from "./dinersClub.png";


import { ImCreditCard } from "react-icons/im";

import { Box, SimpleGrid, Radio, RadioGroup, Stack, Grid, GridItem, Image, Input, Button  } from '@chakra-ui/react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';






const Payment = () => {
    const [value, setValue ] = React.useState('1');
    const [ number, setNumber]  = React.useState('');
    const [ name, setName ] = React.useState('');
    const [ date, setDate ] = React.useState('');
    const [ cvv, setCvv ] = React.useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {
          e.preventDefault();
          localStorage.setItem('number', JSON.stringify([number]));
          if( name === "" || number === "" || date === "" || cvv === "") {
            alert('Please fill in required* details');
          }
          else if(number.length !== 12 ) {
            alert('Please enter proper card details');
          }
          else {
            navigate('/confirm');
          }
          
    }

    console.log(name, date, number, cvv);

    return (
        <div>
            <Header />
            <SimpleGrid columns={1} spacing={1} m='auto' mt='5' mb={[32,20,0,0,0,0]} w={['90%','90%','80%','80%','80%','80%']}>
  <Box height={['95px','95px','70px','70px','70px','70px']} borderBottom='1px' align='left' borderColor='grey' w={['110%','95%','100%','100%','100%','100%']}>
  <SimpleGrid columns={1} spacing={0}>
  <Box height='30px'>PAYMENT METHOD</Box>
  <Box height='40px'>Please select your preferred payment method for this order.</Box>

</SimpleGrid>
  </Box>

  <Box height='350px'>
  <SimpleGrid columns={[1,1,2,2,2,2]} spacing={10} borderBottom='1px' borderColor='grey' mt='4'>
  <Box height='auto'>
  <SimpleGrid columns={1} spacing={1}  align='left'>
  <Box  height='40px'>
  <RadioGroup onChange={setValue} value={value}>
 <Stack direction='row'>
<Radio value='1'></Radio>
<ImCreditCard size='30' />
<Box fontSize='16' fontWeight='bold'>Card</Box>
 </Stack>
</RadioGroup>
  </Box>
  <Box mt='-3' ml='6' height='40px' color='grey'>Immediate Shipping</Box>
  
</SimpleGrid>
  </Box>
  <Box height='350px' align='left'>
  <SimpleGrid columns={1} spacing={1} mt={[-10,-10,0,0,0,0]}>
  <Box height='40px'><Grid templateColumns='repeat(6, 1fr)' gap={1} w={['100%','70%','80%','75%','50%','50%']}>
<GridItem w='100%' h='10'><Image h='8' w={['100%','100%','100%','100%','100%','100%']} src={americanExpress}></Image></GridItem>
<GridItem w='100%' h='10' ><Image h='8' src={visa}></Image></GridItem>
<GridItem w='100%' h='10' ><Image h='8' src={masterCard}></Image></GridItem>
 <GridItem w='100%' h='10' ><Image h='8' src={dinersClub}></Image></GridItem>
   <GridItem w='100%' h='10' ><Image h='8' w='12' src={jcb}></Image></GridItem>
   <GridItem w='100%' h='10' ><Image h='8' src={unionPay}></Image></GridItem>
 </Grid></Box>
  <Box height='40px'>Name on card *</Box>
  <Box height='40px'><Input value={name} onChange={(e) => setName(e.target.value)}></Input></Box>
  <Box height='40px'>Credit card number *</Box>
  <Box height='40px'><Input placeholder='1111 2222 3333' value={number} onChange={(e) => setNumber(e.target.value)}></Input></Box>
  <Box height='40px'>
  <Grid templateColumns={['50% 35%','30% 20%','45% 35%','35% 25%','25% 15%','25% 15%']} gap={6}>
  <GridItem w='100%' h='10' >Expiration date *</GridItem>
  <GridItem w='100%' h='10' >CVC/CVV *</GridItem>
</Grid>
  </Box>
  <Box height='40px'>
  <Grid templateColumns={['50% 35% 40%','30% 25% 30%','45% 30% 40%','35% 30% 30%','25% 20% 20%','25% 20% 20%',]} gap={6}>
  <GridItem w='100%' h='10' ><Input placeholder='MM/YY' value={date} onChange={(e) => setDate(e.target.value)}></Input></GridItem>
  <GridItem w='100%' h='10' ><Input placeholder='123' value={cvv} onChange={(e) => setCvv(e.target.value)}></Input></GridItem>
  <GridItem w='100%' h='10' mt='2' >What is this?</GridItem>
</Grid>
  </Box>
  <Box height='40px'>* required fields</Box>
</SimpleGrid>
  </Box>

</SimpleGrid>
  </Box>
  <Box height='110px' borderBottom='1px' borderColor='grey' mt={[28,28,2,2,2,2]}>
  <SimpleGrid columns={1} spacing={1} mt='4' align='left'>
  <Box  height='40px'>
  <RadioGroup onChange={setValue} value={value}>
 <Stack direction='row'>
<Radio value='2'></Radio>
<ImCreditCard size='30' />
<Box fontSize='16' fontWeight='bold'>Paypal</Box>
 </Stack>
</RadioGroup>
  </Box>
  <Box mt='-3' ml='6' height='40px' color='grey'>Immediate Shipping</Box>
  
</SimpleGrid>
  </Box>
  <Box height='100px'>
  <SimpleGrid columns={[1,1,2,2,2,2]} spacing={6} mt='16'>
  <Box height='30px' align='left'><Button h='30px' w='240px' colorScheme='gray' color='black' onClick={() => navigate('/delivery')}>BACK TO DELIVERY</Button></Box>
  <Box height='30px' align='right'><button style={{backgroundColor:'black', color:'white', height:'30px', width:'240px'}} onClick={handleClick}>PROCEED TO CHECKOUT</button></Box>
</SimpleGrid>
  </Box>
  <Box h={[100,70,70,70,70,70]} mt={[20,20,10,10,10,10]} w='100%' align='left' opacity='90%' borderBottom='1px' borderColor='grey'> <Box w={['120%','100%','70%','70%','36%','36%']}> Please note: By clicking this button, all data listed on this page will be erased for security reasons.</Box> </Box>
 <Box h='16'>  <Box mt={[22,10,10,10,10,10]}> You can also place your order via telephone.</Box></Box>
</SimpleGrid>
<Footer />
        </div>
            )
}



export default Payment

