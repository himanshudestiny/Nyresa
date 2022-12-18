import React from 'react'


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from '@chakra-ui/react'
import { Grid, GridItem, Box, SimpleGrid, Radio, RadioGroup, Stack, Input, Select,Button, Checkbox } from '@chakra-ui/react'

import Header from "./Header";
import Footer from './Footer';


const Delivery = () => {
    const [value, setValue] = React.useState('');
    const [ firstName, setFirstName ] = React.useState('');
    const [ lastName, setLastName ] = React.useState('');
    const [ company, setCompany ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ street, setStreet ] = React.useState('');
    const [ lineTwo, setLineTwo ] = React.useState('');
    const [ post, setPost ] = React.useState('');
    const [ city, setCity ] = React.useState('');
    const [ country, setCountry ] = React.useState('');
    const [ phone, setPhone ] = React.useState('');
    const [ dhl, setDhl ] = useState('');
    const [ mPack, setMPack ] = useState('');
    const [ ePack, setEPack ] = useState('');
    const navigate = useNavigate();

    const handleClick = (e) => {
      e.preventDefault();
      localStorage.setItem('form', JSON.stringify([value, firstName, lastName, company, email, street, lineTwo, post, city, country, phone, dhl, mPack, ePack]));
        
      if( value === "" || firstName === "" || lastName === "" || email === "" || street === "" || post === "" || country === "" || city === "" || phone === "") {
        alert('Prease fill in required* details');
      }
      else if(dhl === "") {
        alert('Plaese select DHL as shipping method')
      }
      else if(mPack === "" && ePack === "") {
        alert('Please select a packaging option');
      }
      else if(phone.length !== 10) {
        alert('Please enter correct phone number');
      }
         else {
          navigate('/payment');
         }
       
    
      
    }

     console.log(phone.length);

  return (
    <div>
       <Header />
       <hr />
       {/* <div className={Styles.option}>  <MdCall color='white' size='40' onMouseOver={handleHover} />   </div> */}
      <SimpleGrid columns={[1,2,2,2,2,2]} spacing={0} mt={['50']} mb='10'>
      <Box height='1100'>
          <Grid templateColumns='repeat(1,1fr)' gap={6}>
             <GridItem w={['118%','95%', '75%', '80%', '75%', '75%']} h='10' ml={[3,5,50,50,150,150]} >
             <SimpleGrid columns={1} spacing={0}>
              <Box  height='50px' align='left'>
                SHIPPING ADDRESS
              </Box>
              <Box  height='50px' align='left'>
                Please enter your shipping address in the form below.
              </Box>
              <Box  height='50px'>
              <RadioGroup onChange={setValue} value={value} onClick={() => setValue(value)}>
               <Stack direction='row'>
                <Radio value='Ms.' colorScheme='blackAlpha'>Ms.*</Radio>
                <Radio value='Mrs.' colorScheme='blackAlpha'>Mrs.*</Radio>
                 <Radio value='Mr.' colorScheme='blackAlpha'>Mr.*</Radio>
                 </Stack>
              </RadioGroup>
              </Box>
              <Box  height='50px' align='left'>
                <form action="">
                <SimpleGrid columns={1} spacing={3}>
                <Input type='string' placeholder='first name *' border='2px' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <Input placeholder='last name *' border='2px' value={lastName} onChange={(e) =>   setLastName(e.target.value)}/>
                <Input placeholder='company' border='2px' value={company} onChange={(e) =>   setCompany(e.target.value)}/>
                <Input placeholder='Email address *' border='2px' value={email} onChange={(e) =>   setEmail(e.target.value)}/>
                <Input placeholder='street *' border='2px' value={street} onChange={(e) =>   setStreet(e.target.value)}/>
                <Input placeholder='address line 2' border='2px' value={lineTwo} onChange={(e) =>   setLineTwo(e.target.value)}/>
                <Input type='number' placeholder='postcode *' border='2px' value={post} onChange={(e) =>   setPost(e.target.value)}/>
                <Input placeholder='city *' border='2px' value={city} onChange={(e) =>   setCity(e.target.value)}/>
                <Select placeholder='country' size='md' border='2px' focusBorderColor = "gray" value={country} onChange={(e) =>   setCountry(e.target.value)}>
                    <option value="China">China</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Russia">Russia</option>
                    <option value="Australlia">Australlia</option>
                    <option value="Japan">Japan</option>
                    <option value="Canada">Canada</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Italy">Italy</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Chile">Chile</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Hon Kong">Hon Kong</option>
                    <option value="South Korea">South Korea</option>
                </Select>
                <Input type='number' maxLength='10' placeholder='mobile phone *' border='2px' value={phone} onChange={(e) =>   setPhone(e.target.value)} />
                <Box  height='50px' align='left'>
                * required fields
              </Box>
                <button></button>
              <Box  height='10px' align='left'>
                
              </Box>
              <Box  height='50px' align='left'>
                BILLING ADDRESS
              </Box>
              <Box  height='50px' align='left'>
              If your billing address differs from your shipping address, please click "add billing address".
              </Box>
              <Box  height='10px' align='left'>
              
              </Box>
              <Box  height='50px' align='left'>
              <Button colorScheme='gray' size='md'>ADD BILLING ADDRESS</Button>
              </Box>
              <Box  height='50px' align='left'>
                
              </Box>
              <Box  height='50px' align='left'>
              <Button colorScheme='gray' size='md'>BACK TO SHOPPING BAG</Button>
              </Box>
                </SimpleGrid>
                </form>
              </Box>
</SimpleGrid>
  </GridItem>
</Grid>
      </Box>





  <Box height='1100px' borderLeft={['0px','0px','1px','1px','1px','1px']} borderColor='gray.200'>
  <SimpleGrid columns={1} spacing={1} align='left' w={['118%','95%', '75%', '80%', '70%', '70%']} ml={[3,5,70,70,70,70]}>
  <Box height='50px'>
    SHIPPING METHOD
  </Box>
  <Box height='auto' border='1px' borderColor='grey' p='10px' opacity='70%'>Due to a high volume of orders, delays of up to 5 days may occur. We apologize for any inconvenience this may cause.</Box>
  <Box height='30px'>
    
  </Box>
  <Box height='50px' borderTop='1px' borderColor='gray.300'>
  <Grid templateColumns='78% 20%' gap={6}>
  <GridItem w='100%' h='10' mt='1'>
    DHL
  </GridItem>
  <GridItem w='80%' h='5' mt='2'>
  <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/2560px-DHL_Logo.svg.png' alt='DHL' />
  </GridItem>
</Grid>
  </Box>
  <Box height='40px'>
  <Grid templateColumns='78% 20%' gap={6} mt='-4'>
  <GridItem w='100%' h='10'>
  <RadioGroup onChange={setDhl} value={dhl} onClick={() => setDhl(value)}>
  <Stack spacing={5} direction='row' fontWeight='bold'>
    <Radio colorScheme='blackAlpha' value='DHL EXPRESS'>
      DHL EXPRESS
    </Radio>
    
  </Stack>
</RadioGroup>
  </GridItem>
  <GridItem w='80%' h='5' mt='1'>
  € 0.00
  </GridItem>
</Grid>
  </Box>
  <Box mt='-8'>
  2-4 business days delivery time
  </Box>
  <Box height='10' borderBottom='1px' borderColor='gray.300' mt='-10'></Box>
  <Box mt='5'>
  PACKAGING OPTIONS
  </Box>
  <SimpleGrid columns={[1,1,1,2,2,2]} spacing={10} mt='5' borderBottom='1px' borderColor='gray.300'>
  <Box height={['200','180','140','140','140','140']} w={['100%','100%','100%','100%','100%','100%']}>
  <RadioGroup fontWeight='bold' value={mPack} onChange={setMPack} onClick={() => setMPack(value)}>
      <Stack direction='row'>
        <Radio value='Mytheresa Packaging' colorScheme='blackAlpha'>Mytheresa packaging</Radio>
      </Stack>
    </RadioGroup>
   <Box ml='6'>Free</Box>
   <Image src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg' w='40%' ml={[40,20,10,6,6,6]}/>
  </Box>
  <Box height={['200','180','160','140','140','140']} w={['100%','100%','100%','100%','100%','100%']}>
  <RadioGroup fontWeight='bold' value={ePack} onChange={setEPack} onClick={() => setEPack(value)}>
      <Stack direction='row'>
        <Radio value='Eco packaging' colorScheme='blackAlpha'>Eco packaging</Radio>
      </Stack>
    </RadioGroup>
   <Box ml='6'>Free</Box>
   <Image src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg' w='40%' ml={[40,20,10,6,6,6]}/>
  </Box>
  
</SimpleGrid>
<Box>CLIMATE NEUTRAL OPTION</Box>
<Box h={[70,90,70,70,50,50]} borderBottom='1px' borderColor='gray.300'>
<Grid templateColumns='78% 20%' gap={6}>
  <GridItem w='100%' h='10' fontWeight='bold'>
  <Checkbox defaultChecked>Help offset the CO2 emissions of your order</Checkbox>
  </GridItem>
  <GridItem w='80%' h='5'>
  € 0.40
  </GridItem>
</Grid>
</Box>
 <Box h='20' align={['center']} mt={[10,100,220,450,460,460]}>
 <button style={{background:"black", color:"white", padding:"4px 30px", width:"100%, 60%, 40%, 40%, 40%, 40%", }} onClick={handleClick}>PROCEED TO CHECKOUT</button>
</Box>

</SimpleGrid>
  </Box>
  
                   </SimpleGrid>
          
                   <hr />
    <Footer />
    <SimpleGrid columns={[1,2,2,2,2,2]} spacing={10} m='auto' mt='10' w='75%' borderTop='1px' borderColor='grey'>
  <Box height='auto' align='left' opacity='60%' mt='5'>
  copyright © 2006-2022 mytheresa.com
  </Box>
  <Box height='auto'  opacity='60%' mt='5' align={['left','right','right','right','right','right']}>
  terms of use privacy policy imprint
  </Box>
  
</SimpleGrid>
    </div>
  )
}

export default Delivery









