import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Text,Flex,Image } from '@chakra-ui/react';

const ProdusCardToBuy = ({ produs })=> {
  if (!produs || !produs.title || !produs.text) {
    return null;
  }

  return (
    <Link to={`/produs/${produs._id}`}>
      <Flex alignItems="center" justifyContent="center">
      <Box 
        width="15em"
        overflow="hidden"
        padding="12px"
        boxShadow="md"
        borderRadius="8px"
        marginBottom="12px"
        bg="#619b8a"
        _hover={{
          bg: '#fcca46',
          color:"black",
          mt: "1%",
          borderRadius:"15px"
        }}
      >
        

        <Text 
          fontSize="lg"
          color="white"
          align="center"
          marginTop="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
        >
          {produs.title}
        </Text>
        <Flex alignItems="center" justifyContent="center"> 
        <Image mt="2%"
        border="3px solid black"
        boxSize="150px"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80"/>
        </Flex>
        <Text
        color="white"
          mt="10%"
          lineHeight="tight"
          isTruncated
          maxH="50px"
          overflow="hidden"
        >
          Descriere: {produs.text}
        </Text>
        <Text
        color="white"
          mt="10%"
          lineHeight="tight"
          isTruncated
          maxH="50px"
          overflow="hidden"
        >
          Pret: {produs.price} $
        </Text>
      </Box>
      </Flex>
    </Link>
  );
}

export default ProdusCardToBuy;