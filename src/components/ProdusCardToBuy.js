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
        bg="#ffee32"
      >
        
        <Text 
          fontSize="lg"
          color="#202020"
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
        color="#202020"
          mt="10%"
          lineHeight="tight"
          isTruncated
          maxH="50px"
          overflow="hidden"
        >
          Descriere: {produs.text}
        </Text>
        <Text
        color="#202020"
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