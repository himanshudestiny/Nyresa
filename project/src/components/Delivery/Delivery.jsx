import React from 'react'

import Header from "./Header";
import { MdCall } from "react-icons/md";

import { Grid, GridItem, Box, SimpleGrid, Radio, RadioGroup, Stack, Input, Select,Button, ButtonGroup, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Footer from './Footer';

const Delivery = () => {
    const [value, setValue] = React.useState('1');


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
              <RadioGroup onChange={setValue} value={value}>
               <Stack direction='row'>
                <Radio value='1' colorScheme='blackAlpha'>Ms.*</Radio>
                <Radio value='2' colorScheme='blackAlpha'>Mrs.*</Radio>
                 <Radio value='3' colorScheme='blackAlpha'>Mr.*</Radio>
                 </Stack>
              </RadioGroup>
              </Box>
              <Box  height='50px' align='left'>
                <form action="">
                <SimpleGrid columns={1} spacing={3}>
                <Input placeholder='first name *' border='2px'/>
                <Input placeholder='last name *' border='2px'/>
                <Input placeholder='company' border='2px'/>
                <Input placeholder='Email address *' border='2px'/>
                <Input placeholder='street *' border='2px'/>
                <Input placeholder='address line 2' border='2px'/>
                <Input placeholder='postcode *' border='2px'/>
                <Input placeholder='city *' border='2px'/>
                <Select placeholder='country' size='md' border='2px' focusBorderColor = "gray">
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
                </Select>
                <Input placeholder='mobile phone *' border='2px'/>
                <Box  height='50px' align='left'>
                * required fields
              </Box>
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





  <Box height='1100px' borderLeft={['0px','0px','1px','1px','1px','1px']} borderColor='grey'>
  <SimpleGrid columns={1} spacing={1} align='left' w={['118%','95%', '75%', '80%', '70%', '70%']} ml={[3,5,70,70,70,70]}>
  <Box height='50px'>
    SHIPPING METHOD
  </Box>
  <Box height='auto' border='1px' borderColor='grey' p='10px' opacity='70%'>Due to a high volume of orders, delays of up to 5 days may occur. We apologize for any inconvenience this may cause.</Box>
  <Box height='30px'>
    
  </Box>
  <Box height='50px' borderTop='1px' borderColor='grey'>
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
  <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row' fontWeight='bold'>
    <Radio colorScheme='blackAlpha' value='2' >
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
  <Box height='10' borderBottom='1px' borderColor='grey' mt='-10'></Box>
  <Box mt='5'>
  PACKAGING OPTIONS
  </Box>
  <SimpleGrid columns={[1,1,1,2,2,2]} spacing={10} mt='5' borderBottom='1px' borderColor='grey'>
  <Box height={['200','180','140','140','140','140']} w={['100%','100%','100%','100%','100%','100%']}>
  <RadioGroup onChange={setValue} value={value} fontWeight='bold'>
      <Stack direction='row'>
        <Radio value='5' colorScheme='blackAlpha'>Mytheresa packaging</Radio>
      </Stack>
    </RadioGroup>
   <Box ml='6'>Free</Box>
   <Image src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg' w='40%' ml={[40,20,10,6,6,6]}/>
  </Box>
  <Box height={['200','180','160','140','140','140']} w={['100%','100%','100%','100%','100%','100%']}>
  <RadioGroup onChange={setValue} value={value} fontWeight='bold'>
      <Stack direction='row'>
        <Radio value='4' colorScheme='blackAlpha'>Eco packaging</Radio>
      </Stack>
    </RadioGroup>
   <Box ml='6'>Free</Box>
   <Image src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg' w='40%' ml={[40,20,10,6,6,6]}/>
  </Box>
  
</SimpleGrid>
<Box>CLIMATE NEUTRAL OPTION</Box>
<Box h={[70,90,70,70,50,50]} borderBottom='1px' borderColor='grey'>
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
<button style={{background:"black", color:"white", padding:"4px 30px", width:"100%, 60%, 40%, 40%, 40%, 40%", }}>PROCEED TO CHECKOUT</button>
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









