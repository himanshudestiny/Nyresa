import React from 'react'
import "./Products.css"
import { useState } from 'react'
import { Box, Divider, Grid, GridItem, Select, Text, useBreakpointValue } from '@chakra-ui/react'

import Header from '../components/sidebar/Header'
import Sidebar from '../components/sidebar/Sidebar'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }




const Products = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />


       


        <Divider/>

        <Box>
        <Grid templateColumns="repeat(3,1fr)">
          <GridItem> dgfdghegfeaf</GridItem>
          <GridItem> dgfdghegfeaf</GridItem>
          <GridItem> dgfdghegfeaf</GridItem>
          <GridItem> dgfdghegfeaf</GridItem>
        </Grid>

      </Box>
      </Box>

      
    </>
  )
}

export default Products