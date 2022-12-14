import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import '../components_css/ProductDetails.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProductDetails = () => {
  const handleAddtobag=()=>
  {
    console.log('click')
  }
  const handlewishlist=()=>
  {
    console.log('click')
  }
  const handlePrev=()=>
  {
    console.log('click')
  }
  const handleNext=()=>
  {
    console.log('click')
  }
  return (
    <Box > 
    <Center>
       <Box className="Product_details_Mega_container"  >
      <div className='Product_details_Mega_container_first_child'>
      <Image  boxShadow={'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px'} width={'90%'} height={'100%'} margin={'auto'} src='https://media1.popsugar-assets.com/files/thumbor/bS4O6CnmOsNcmTpCOlJHOwU4tv0/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/01/11/289/n/1922564/3706e5e061de6dcb8f7e26.83610660_/i/How-Style-Clothes-You-Already-Have.jpg'
            alt='Dan Abramov'/>
      </div>
      <div className='Product_details_Mega_container_second_child' >
        <Text margin={'20px'} fontSize={'20px'} fontWeight={'bold'}>Title</Text>
        <Text margin={'20px'}>Discription</Text>
        <Text margin={'20px'} fontWeight={'bold'}>Price</Text>
        <Text margin={'20px'} fontSize={'14px'}>Details</Text>
        <Button margin={'20px'} onClick={handleAddtobag} borderRadius={'none'} color={'white'} bgColor={'black'}>ADD TO SHOPPING BAG</Button>
        <br />
        <Button margin={'20px'} onClick={handlewishlist} borderRadius={"none"} >ADD TO WISHLIST <svg style={{marginLeft:'5px'}} width={'18px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></Button>
        <Text margin={'20px'}>Free Shipping</Text>
        <Box margin={'20px'}>
          <Text>Style details</Text>
          <Text>Description</Text>
        </Box>
      </div>
    </Box>
    <br />
    </Center>
    <br />
    <br />
    <Flex width={'60%'} margin={'auto'} height={'300px'}>
    <Button onclick={handlePrev} margin={"auto"}>{'<'}</Button>
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
    >
      <SwiperSlide><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52UW-ccgwBNNJCAIaeO4P5RjTxSsi91KyX8Rcl_wC8gTwZP2ErO0QmmKZBKB7qC5KrrA&usqp=CAU' /></SwiperSlide>
      <SwiperSlide><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-moQYrmDZkMh8KdESM67LpEdbwGm1P4m-WB68POXHiJwZ3YCYjMRI_6C3LnJ9XNRRO8&usqp=CAU' /></SwiperSlide>
      <SwiperSlide><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2j6hjj6y-mJoJBMo7NqdS3SaOQBLJwb3eCB6OyJs-hcZyeTs4C4R70TfBLTl0dojJxcM&usqp=CAU' /></SwiperSlide>
      <SwiperSlide><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRJCOUtLjGU4x_x-N-wj4345zvnAIXIr3uqRwm5PlCHXTDYONBCmqZDkzXEBsjKQEka0&usqp=CAU' /></SwiperSlide>
    </Swiper>
    <Button onClick={handleNext} margin={"auto"}>{'>'}</Button>
    </Flex>
    </Box>
  )
}

export default ProductDetails

// width={'70%'} height={"600px"} margin={'auto'} border={'1px solid red'}



