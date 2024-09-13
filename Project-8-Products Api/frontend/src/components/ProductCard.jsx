import { Box,Heading,HStack,IconButton,Image ,Modal,ModalBody,ModalCloseButton,ModalContent,ModalHeader,ModalOverlay,Text, useColorModeValue, useToast,VStack,Input, ModalFooter, Button, useDisclosure} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const ProductCard = ({product}) => {
  const [updatedProduct,setUpdatedProduct]=useState(product);
  const textColor=useColorModeValue("gray.600" ,"gray.200");
  const bg=useColorModeValue("white","gray.800");
  const {deleteProduct,updateProduct}=useProductStore();
  const toast=useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleUpdate=async(pid,updatedProduct)=>{
  const{success,message}= await  updateProduct(pid,updatedProduct);
    onClose();
    if(!success){
      toast({
      title:"Error",
       description:message,
       status:"error",
       isClosable:true,
       duration:3000,
      })
   }else{
     toast({
       title:"Success",
        description:"Product Updated Succesfully",
        status:"success",
        isClosable:true,
        duration:3000,
       })
   }
  }
  const handleDelete=async(id)=>{
  const {success,message}=await deleteProduct(id);
  if(!success){
    toast({
    title:"Error",
     description:message,
     status:"error",
     isClosable:true,
     duration:3000,
    })
 }else{
   toast({
     title:"Success",
      description:message,
      status:"success",
      isClosable:true,
      duration:3000,
     })
 }
  }
  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{transform:'translate(-5px}',shadow:"xl"}}
    bg={bg}
    >
      <Image src={product.image} alt={product.name} w='full' objectFit='cover'></Image>
      <Box px={4}>
        <Heading as='h3' size='md' mb={2}>{product.name}</Heading>
        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>${product.price}</Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon/>}  onClick={onOpen} colorScheme='blue'/>
          <IconButton icon={<DeleteIcon/>} onClick={()=>handleDelete(product._id)} colorScheme='red'/>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
          <VStack spacing={4}>
              <Input placeholder='Product Name' name='name' value={updatedProduct.name}
              onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}
              />
               <Input placeholder='Price' name='price' type='number' value={updatedProduct.price}
              onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}
              />
               <Input placeholder='Image URL' name='image' type='number' value={updatedProduct.image}
              onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleUpdate(product._id,updatedProduct)}>Update</Button> 
            <Button variant='ghost' onClick={onClose}></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default ProductCard