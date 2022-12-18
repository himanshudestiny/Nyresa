import React from 'react'
import Header from './Header';
import Product from "./Product";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { SimpleGrid, Box, Grid, GridItem, Textarea, Checkbox } from '@chakra-ui/react'


// const products = [
//     { id : '1',
//     title: 'TOM FORD',
//     desc: 'Shelton velvet blazer',
//     size: 'IT- 46 / S',
//     itemNo: 'P00505633',
//     price: 2530.00,
//     quantity: 1,
//     subTotal: 2530.00,
//     image:'https://img.mytheresa.com/240/240/90/jpeg/catalog/product/a5/P00505633.jpg'
// },
// { id : '2',
// title: 'OUR LEGACY',
// desc: 'Wool-blend scarf',
// size: 'One size fits all',
// itemNo: 'P00706095',
// price: 83.00,
// quantity: 2,
// subTotal: 83.00,
// image:'https://img.mytheresa.com/240/240/90/jpeg/catalog/product/f3/P00706059.jpg'
// },
// { id : '3',
// title: 'ALANUI',
// desc: 'Dancing Light crocheted wool-blend cardigan',
// size: 'S',
// itemNo: 'P00691258',
// price: 619.00,
// quantity: 3,
// subTotal: 619.00,
// image:'https://img.mytheresa.com/240/240/90/jpeg/catalog/product/bd/P00691258.jpg'
// },
// ]




const getForm = () => {
    let form = JSON.parse(localStorage.getItem('form')) || [];
    
    return form;
}

const getNumber = () => {
    let number = JSON.parse(localStorage.getItem('number')) || [];
    
    return number;
}




const Confirm = () => {

     const [ form, setForm ] = React.useState([]);
     const [ number, setNumber ] = React.useState([]);
     const [ products, setProducts] = React.useState([]);
    const navigate = useNavigate()

     let subtotal = 0;

     const getData = async () => {
      return axios.get('http://localhost:8080/productlist').then((res) => setProducts(res.data));
      
}

     const add = (total) => {
      subtotal=subtotal+total;
     }

   React.useEffect(() => {
      setForm(getForm());
      setNumber(getNumber());
   },[])
     
   React.useEffect(() => {
                getData();
   },[])


   const handlePurchase = () => {
        alert('Your order has been placed successfully! ');
        navigate('/');
   }
    
  return (
    <div>
        <Header />
        <SimpleGrid columns={1} spacing={1} w={['118%','95%','95%','95%','95%','80%']} m='auto'>
  <Box  height='70px' align='left' mt='2'>
           <Box>ORDER REVIEW</Box>
           <Box>Please review your order, confirm that you have read and accept our terms and conditions, and then click "complete purchase".</Box>
  </Box>


  <Box bg='gray.100'  height={['200px','180px','160px','140px','140px','140px']} mt={[10,5,5,0,0,0]}>
    <Box> <Box w='90%' m='auto' mt='2'>Due to import regulations, the carrier (DHL) may charge duties and taxes upon delivery. Kindly note that we cannot refund these fees, even if you return your items.
Do you agree to these conditions?</Box>  </Box>
<Box mt='4'><button style={{backgroundColor:"black", color:'white', width:'180px', height:'30px', fontSize:'12px'}}>YES, I ACCEPT</button></Box>
<Box textDecoration='underline' opacity='60%'>Please send me more information</Box>
  </Box>
  <Box  height={['1050px','1050px','1050px','500px','500px','500px']} mt='10'>
  <SimpleGrid columns={[1,1,1,2,2,2]} spacing={[6,6,6,24,24,24]}>
  <Box height='500px'>    
  <SimpleGrid columns={1} spacing={2}>
  <Box height='230px' align='left' borderTop='1px' borderColor='grey'>
  <Grid templateColumns='75% 24%' gap={1} mt='2'>
  <GridItem w='100%' h='8'  align='left' >SHIPPING ADDRESS</GridItem >
 <Link to='/delivery'> <GridItem w='100%' h='8'  align='right' opacity='80%'>    Change </GridItem ></Link>
</Grid>
<Box opacity='80%'>{form[0]} <span>{form[1]} {form[2]}</span> </Box>
<Box opacity='80%'></Box>
<Box opacity='80%'>{form[6]}</Box>
<Box opacity='80%'>{form[7]} <span>{form[8]}</span> </Box>
<Box opacity='70%' fontWeight='bold' h='10'>{form[9]}</Box>
 <Box opacity='80%'>Email address  <span>{form[4]}</span>  </Box>
  </Box>
  
  <Box height='100px' align='left' borderTop='1px' borderColor='grey'>
  <Grid templateColumns='75% 24%' gap={1} mt='2'>
  <GridItem w='100%' h='8'  align='left' >SHIPPING METHOD</GridItem >
 <Link to='/delivery'> <GridItem w='100%' h='8'  align='right' opacity='80%'>    Change </GridItem ></Link>
</Grid>
<Box opacity='80%'>{form[11]}  <span>$ 0.00</span>  </Box>
  </Box>
  <Box height='140px' align='left' borderTop='1px' borderColor='grey'>
  <Grid templateColumns='75% 24%' gap={1} mt='2'>
  <GridItem w='100%' h='8'  align='left' >CLIMATE NEUTRAL OPTION</GridItem >
<Link to='/delivery'>  <GridItem w='100%' h='8'  align='right' opacity='80%'>    Change </GridItem ></Link>
</Grid>
<Box bg='gray.100' align='center' h={[12,8,8,12,8,8]} opacity='80%'>Change your settings now to help offset the CO2 emissions of your order</Box>
<Box opacity='80%'>CO2 offsetting € 0.00</Box>
  </Box>
  
</SimpleGrid>
  </Box>
  <Box height='500px' borderColor='red'>
  <SimpleGrid columns={1} spacing={2}>
  <Box height='230px' align='left' borderTop='1px' borderColor='grey'>
  <Grid templateColumns='75% 24%' gap={1} mt='2'>
  <GridItem w='100%' h='8'  align='left' >BILLING ADDRESS</GridItem >
<Link to='/delivery'>  <GridItem w='100%' h='8'  align='right' opacity='80%'>    Change </GridItem ></Link>
</Grid>
<Box opacity='80%'>{form[0]} <span>{form[1]} {form[2]}</span> </Box>
<Box opacity='80%'>{form[5]}</Box>
<Box opacity='80%'>{form[6]}</Box>
<Box opacity='80%'>{form[7]} <span>{form[8]}</span> </Box>
<Box opacity='70%' fontWeight='bold' h='10'>{form[9]}</Box>

  </Box>
  
  <Box height='100px' align='left' borderTop='1px' borderColor='grey'>
  <Grid templateColumns='75% 24%' gap={1} mt='2'>
  <GridItem w='100%' h='8'  align='left' >PACKAGING OPTIONS</GridItem >
 <Link to='/delivery'> <GridItem w='100%' h='8'  align='right' opacity='80%'> Change</GridItem ></Link>
</Grid>
<Box opacity='80%'>{form[13] || form[12]}</Box>
  </Box>
  <Box height='140px' align='left' borderTop='1px' borderColor='grey'>
  <Grid templateColumns='75% 24%' gap={1} mt='2'>
  <GridItem w='100%' h='8'  align='left' >PAYMENT METHOD</GridItem >
 <Link to='/payment'> <GridItem w='100%' h='8'  align='right' opacity='80%'>    Change </GridItem ></Link>
</Grid>
<Box align='left' h='8' opacity='80%'>card type:</Box>
<Box opacity='80%'>Card number: xxxx-<span>{number[0]%10000}</span> </Box>
  </Box>
  
</SimpleGrid>
  </Box>
  
</SimpleGrid>
  </Box>
  <Box  borderColor='grey' height={['100px','80px','80px','80px','40px','40px']}>Product prices exclude all taxes and duties. Please note that import taxes and duties will be applied and invoiced separately by the shipping company.</Box>
   <Box mt='2' height='auto'>


    {
        products.map((product) => (
          
          <div key={product.id}>
            <Product key={product.id} title={product.title} desc={product.subtitle} size={product.size} itemNo={product.itemNo} quantity={product.quantity} price={product.price} subTotal={product.price* product.quantity} image={product.images[0]} subtotal={subtotal+ product.price} />
          { add(product.price* product.quantity) }
             </div>
        ))
    }
  </Box> 
<Box h='auto' align='right' >

    <Box opacity='80%' h='8' mt='2'>Subtotal $<span>{subtotal}</span> </Box>
    <Box opacity='80%' h='8'>Shipping (DHL Express)  <span>$ 0.00</span> </Box>
    <Box h='12' > <span style={{fontWeight:'bolder'}}>Grand Total $</span><span>{subtotal}</span> </Box>
    <Box opacity='80%' h='8'>VAT exception. VAT not included </Box>
    <Box h='8'> <button style={{backgroundColor:"black", width:"240px", color:'white', fontSize:'14px', height:'40px', alignItems:"center", justifyContent:'center'}} onClick={handlePurchase}>COMPLETE PURCHASE</button> </Box>
   
</Box>

<SimpleGrid columns={[1,1,1,2,2,2]} spacing={[10,10,10,10,350,350]} mt='8'>
  <Box h='auto'>
    <Box h='100px' bg='gray.100'>  
    <Box w='80%' m='auto' lineHeight={8}> <Box>Try it on in the comfort of your own home</Box> <Box>30-day return policy.</Box> <Box>Return shipping – easy and free of charge.</Box></Box>
 </Box>
 <Textarea placeholder='order comments' mt='4' borderColor='grey' borderRadius='none' h='100px'/>
 <Box opacity='80%' align='left'>80 characters left</Box>
  </Box>
  <Box height='auto' align='left' >
    <Box ml='8' fontWeight='bolder'>Due to a high volume of orders, delays of up to 5 days may occur. We apologize for any inconvenience this may cause.</Box>
    <Box mt='4' ml='8' opacity='80%'>By completing your order, you accept our terms and conditions, and agree to our cancellation policy.</Box>
    <Grid templateColumns='6% 92%' gap={1} mt='4'>
  <GridItem w='100%' h='10' ><Checkbox defaultChecked mt='2'></Checkbox></GridItem>
  <GridItem w='100%' h='auto' >Create a user account using the information from this order</GridItem>
</Grid>
<Grid templateColumns='6% 92%' gap={1} mt='4'>
  <GridItem w='100%' h='10' ><Checkbox defaultChecked mt='2'></Checkbox></GridItem>
  <GridItem w='100%' h='auto' opacity='80%'>From now on I will receive the Mytheresa Newsletter with selected fashion offers. If I do not wish to receive the newsletter, I can unsubscribe at any time free of charge at privacy@mytheresa.com.</GridItem>
</Grid>
  </Box>
  
</SimpleGrid>
<Box h='6' borderTop='1px' mt='8' mb='10'>  <Box mt={[22,10,10,10,10,10]}> You can also place your order via telephone.</Box></Box>
</SimpleGrid>
<Footer />
    </div>
  )
}

export default Confirm