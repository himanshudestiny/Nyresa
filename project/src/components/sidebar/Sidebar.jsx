import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
    Text,
    Divider,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Checkbox,
  } from '@chakra-ui/react'

 import { filterdata,getdata } from '../../redux/products/Prodaction'

  import {useDispatch} from "react-redux"
  
 import "../Products.css"

  
  
  const SidebarContent = ({ onClick,show ,dispatch}) => (
  
    
  
    <Box mt={4} textAlign="left" borderTop="1px solid grey"   fontSize="15px" cursor="pointer">
        <Flex flexDirection="column"  gap={2}>
          {
            show=='sidebar' && 
          
          <Box lineHeight={8} mt={5}>
        <Text >NEW ARRIVALS</Text>
        <Text fontWeight="bold" fontSize={14} mt={2} mb={2}>Current Week</Text>
        <Text color="grey" className='hovereffect'>Previous Weeks </Text>
        <Text color="grey" className='hovereffect'>Essentials</Text>
        <Text color="grey" className='hovereffect'>Tailoring Edit </Text>
        <Text color="grey" className='hovereffect'>Loungewear </Text>
        <Text color="grey" className='hovereffect'>Cold Weather Edit  </Text>
        <Text color="grey" className='hovereffect'>The Ski Edit </Text>
        </Box>}

        <Accordion allowToggle  mt={5}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span"  flex='1' textAlign='left'>
        Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
      <Flex flexDirection="column">
    <Checkbox onChange={()=>{dispatch(getdata(1,"","")); onClick()}}><Text className='hovereffect' color="grey">All</Text></Checkbox>
    <Checkbox onChange={()=>{dispatch(filterdata("Joggers")); onClick()}}><Text className='hovereffect' color="grey">Joggers</Text></Checkbox>
    <Checkbox onChange={()=>{dispatch(filterdata("Shirt")); onClick()}}><Text className='hovereffect'  color="grey">Shirt</Text></Checkbox>
    <Checkbox onChange={()=>{dispatch(filterdata("Jeans")); onClick()}}><Text className='hovereffect' color="grey">Jeans</Text></Checkbox>
    </Flex>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Designers
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex flexDirection="column">
    <Checkbox><Text className='hovereffect' color="grey">Gucci</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Herno</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Kenzo</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Marni</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Tom Ford</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Versace</Text></Checkbox>
    </Flex>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Colours
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  height="240px" overflow="scroll">
    <Flex flexDirection="column">
    <Checkbox><Text className='hovereffect' color="grey">Black</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Green</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Maroon</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Pink</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Red</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Golden</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">White</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Yellow</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Multicoloured</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Orange</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Purple</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Grey</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Indigo</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Blue</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Brown</Text></Checkbox>
    </Flex>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Pattern
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Flex flexDirection="column">
    <Checkbox><Text className='hovereffect' color="grey">Stripped</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Printed</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Plain</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Patterened</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Embellished</Text></Checkbox>
    <Checkbox><Text className='hovereffect' color="grey">Checked</Text></Checkbox>
    </Flex>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

     
      </Flex>
    </Box>
  )
  
  const Sidebar = ({ isOpen, variant, onClose }) => {

    const dispatch=useDispatch();

    return variant === 'sidebar' ? (

     
       
      <Box
        
        left={0}
        p={5}
        w="400px"
        top={0}
        h="100%"
        borderRight="1px solid black"
        
      >
         <Text  color="grey" fontSize="11px">Men/New Arrivals/Current Week </Text>
         {/* <Divider mt="13px"/> */}

        <SidebarContent onClick={onClose} show={variant} dispatch={dispatch} />
      </Box>
      
    ) : (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter </DrawerHeader>
            <DrawerBody>
              <SidebarContent onClick={onClose} show={variant} dispatch={dispatch}/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  
  export default Sidebar