import React from 'react'

import { SimpleGrid, Box } from '@chakra-ui/react'
import { MdCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";


const Footer = () => {
  return (
    <SimpleGrid columns={[1,2,2,2,2,2]} spacing={4} m='auto' w={['105%','90%','85%','80%','60%','60%']} mt={[-100,10,10,10,10,10]}>
  <Box  height='auto' border='1px' borderColor='grey' pb='10' w={['115%','95%', '100%', '100%', '100%', '100%']}>
  <SimpleGrid columns={1} spacing={0}>
  <Box height='40px' align='center' mt='2'>
  <MdCall size='40'/>
  </Box>
  <Box height='50px' fontSize='20'>CALL US</Box>
  <Box height='30px' opacity='70%'>+49 89 127695-101</Box>
  <Box  height='30px' mt='-3' opacity='70%'>Argentina: 0800-666-0663</Box>
  <Box  height='30px' mt='-3' opacity='70%'>Chile: 800-914-515</Box>
  <Box  height='30px' mt='-3' opacity='70%'>Colombia: 01800-518-5268</Box>
  <Box  height='30px' mt='-3' opacity='70%'>Mexico: 01-800-099-0703</Box>
  <Box  height='30px' mt='-3' opacity='70%'>Peru: 0800-78259</Box>
  <Box  height='30px' mt='-3' opacity='70%'>Puerto Rico: 1-787-303-4205</Box>
  <Box  height='30px'  opacity='70%'>Available 24/7</Box>
</SimpleGrid>
  </Box>



  <Box  height='auto' border='1px' borderColor='grey' pb='10' w={['115%','95%', '100%', '100%', '100%', '100%']}>
  <SimpleGrid columns={1} spacing={0}>
  <Box height='40px' align='center' mt='2'>
     <GrMail size='40' />
  </Box>
  <Box height='50px' fontSize='20'>MAIL US</Box>
  <Box height='30px' opacity='70%' textDecoration='underline'>customercare@mytheresa.com</Box>
  <Box  height='auto' m='auto' w='70%' >Please note that due to a high amount of requests, we might take a few days to get back to you. We apologize for any inconvenience this may cause.</Box>
  
</SimpleGrid>
  </Box>

     </SimpleGrid>
     
  )
}

export default Footer
