import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Text,Flex,Image } from '@chakra-ui/react';

const ProdusCard = ({ produs })=> {
  if (!produs || !produs.title || !produs.text) {
    return null;
  }

  return (
    <Link to={`/myprodus/${produs._id}`}>
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

export default ProdusCard;