import { Box, Center, IconButton, Text, Flex, Select } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {FaBlackTie, FaListUl} from "react-icons/fa"
import Pagination from '../Pagination'
import { useState } from 'react'
import "../Products.css"



const Header = ({ showSidebarButton = true, onShowSidebar,count,page,updateCurrentPage ,sortorder}) => {

  const [val,setval]=useState("");

   const handlechange=(e)=>{

    // setval(e.target.value);

    sortorder(e.target.value);
   }
  
   console.log(val);

  return (
    <Flex  p={3} color="white" >
      <Box >
        {showSidebarButton && (
          
            <Flex gap={1}  onClick={onShowSidebar} cursor="pointer">
              <Text>Filter</Text>
             <Box mt="5px" ><FaListUl /></Box> 
              </Flex>
            
          
          // <IconButton
          //   icon={<ChevronRightIcon w={8} h={8} />}
          //   colorScheme="blackAlpha"
          //   variant="outline"
          //   onClick={onShowSidebar}
          // />
        )}
      </Box>
      {/* <Center flex="1" h="40px">
        <Text fontSize="xl">Page Title</Text>
      </Center> */}
      <Box className='sortsec' >
      <Text color="gray">{108} Products</Text>
      
      <Select width={{sm:"100px",md:"100px",base:"100px"}} border="none" color="grey" value={val}  onChange={handlechange} placeholder='Sort by' height={6}>
    <option value='asc'>Price low-to-high</option>
    <option value='desc'>Price high-to-low</option>
    
    </Select>
        
        {
          !showSidebarButton &&
        
    <Pagination count={count} currentPage={page} updateCurrentPage={updateCurrentPage}/>}

    </Box>

      <Box  />
    </Flex>
  )
}

export default Header