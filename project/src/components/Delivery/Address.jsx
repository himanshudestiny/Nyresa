import React from 'react'
import { Grid, GridItem, Box, SimpleGrid, Radio, RadioGroup, Stack, Input, Select,Button, Checkbox } from '@chakra-ui/react';

import { useState, useEffect } from "react";

const Address = () => {
    const [ bvalue, setbValue ] = React.useState('');
    const [ bfirstName, setbFirstName ] = React.useState('');
    const [ blastName, setbLastName ] = React.useState('');
    const [ bcompany, setbCompany ] = React.useState('');
    const [ bemail, setbEmail ] = React.useState('');
    const [ bstreet, setbStreet ] = React.useState('');
    const [ blineTwo, setbLineTwo ] = React.useState('');
    const [ bpost, setbPost ] = React.useState('');
    const [ bcity, setbCity ] = React.useState('');
    const [ bcountry, setbCountry ] = React.useState('');
    const [ bphone, setbPhone ] = React.useState('');
  return (
    <div>
     
          <Grid templateColumns='repeat(1,1fr)' gap={6}>
             <GridItem w={['118%','95%', '75%', '80%', '75%', '75%']} h='10' ml={[3,5,50,50,150,150]} >
             <SimpleGrid columns={1} spacing={0}>
              <Box  height='50px' align='left'>
                BILLING ADDRESS
              </Box>
              <Box  height='50px' align='left'>
                Please enter your billing address in the form below.
              </Box>
              <Box  height='50px'>
              <RadioGroup onChange={setbValue} value={bvalue} onClick={() => setbValue(bvalue)}>
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
                <Input placeholder='first name *' border='2px' value={bfirstName} onChange={(e) => setbFirstName(e.target.value)}/>
                <Input placeholder='last name *' border='2px' value={blastName} onChange={(e) =>   setbLastName(e.target.value)}/>
                <Input placeholder='company' border='2px' value={bcompany} onChange={(e) =>   setbCompany(e.target.value)}/>
                <Input placeholder='Email address *' border='2px' value={bemail} onChange={(e) =>   setbEmail(e.target.value)}/>
                <Input placeholder='street *' border='2px' value={bstreet} onChange={(e) =>   setbStreet(e.target.value)}/>
                <Input placeholder='address line 2' border='2px' value={blineTwo} onChange={(e) =>   setbLineTwo(e.target.value)}/>
                <Input placeholder='postcode *' border='2px' value={bpost} onChange={(e) =>   setbPost(e.target.value)}/>
                <Input placeholder='city *' border='2px' value={bcity} onChange={(e) =>   setbCity(e.target.value)}/>
                <Select placeholder='country' size='md' border='2px' focusBorderColor = "gray" value={bcountry} onChange={(e) =>   setbCountry(e.target.value)}>
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
                <Input placeholder='mobile phone *' border='2px' value={bphone} onChange={(e) =>   setbPhone(e.target.value)}/>
                <Box  height='50px' align='left'>
                * required fields
              </Box>
                <button></button>
              <Box  height='10px' align='left'>
                
              </Box>
              <Box  height='10px' align='left'>
              
              </Box>
              <Box  height='50px' align='left'>
              <Button colorScheme='gray' size='md'>REMOVE DIFFERENT BILLING ADDRESS</Button>
              </Box>
              <Box  height='50px' align='left'>
                
              </Box>
                </SimpleGrid>
                </form>
              </Box>
</SimpleGrid>
  </GridItem>
</Grid>
     
    </div>
  )
}

export default Address
