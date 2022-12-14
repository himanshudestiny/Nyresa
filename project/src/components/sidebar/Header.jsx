import { Box, Center, IconButton, Text, Flex, Select } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {FaBlackTie, FaListUl} from "react-icons/fa"
import Pagination from '../Pagination'
import { useState } from 'react'
import "../Products.css"



const Header = ({ showSidebarButton = true, onShowSidebar }) => {

  const [page,setpage]=useState(1);
  return (
    <Flex  p={4} color="white" >
      <Box flex="1">
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
      <Text color="gray">{} Products</Text>
      
      <Select width={{sm:"100px",md:"100px",base:"100px"}} border="none" color="grey"  placeholder='Sort by' height={6}>
    <option value='asc'>Price low-to-high</option>
    <option value='desc'>Price high-to-low</option>
    
    </Select>
        
        {
          !showSidebarButton &&
        
    <Pagination count={5} currentPage={page} updateCurrentPage={(pan)=>setpage(pan)}/>}

    </Box>

      <Box  />
    </Flex>
  )
}

export default Header