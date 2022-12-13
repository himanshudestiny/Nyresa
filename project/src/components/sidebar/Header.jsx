import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {FaBlackTie, FaListUl} from "react-icons/fa"



const Header = ({ showSidebarButton = true, onShowSidebar }) => {
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

      <Text color="gray">sort by</Text>
      <Box flex="1" />
    </Flex>
  )
}

export default Header