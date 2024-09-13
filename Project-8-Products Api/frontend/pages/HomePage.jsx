import React, { useEffect } from 'react'
import { Container, VStack,Text, textDecoration, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../src/store/product'
import ProductCard from '../src/components/ProductCard'

const HomePage = () => {
const {fetchProducts,products}=useProductStore();
  useEffect(()=>{
  fetchProducts();},[fetchProducts]);
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
      <Text
      bgGradient={"linear(to-r,cyan.400,blue.500)"}
      bgClip='text'
      fontSize={"30"}
      fontWeight='bold'
     
      textAlign={"center"}
    >
      Current Products 🚀
    </Text>
    <SimpleGrid
    column={{
      base:1,
      md:2,
      lg:3
    }}
    spacing={10}
    w={"full"}
    >
  {products.map((product)=>(
    <ProductCard key={product._id} product={product}/>
  ))}
    </SimpleGrid>
    {products.length===0 &&(
      <Text fontSize='xl' textAlign={"center"} fontWeight="bold" color='gray.500'>
      No Products found 😓{" "}
      <Link  to={"/create"}
      ><Text as='span' color='blue.500' _hover={{textDecoration:"underline"}}>Create a Product</Text>
      </Link>
    </Text>
    )}
      </VStack>
    </Container>
  )
}

export default HomePage
