import React from 'react';
import { Heading, Box, useColorModeValue } from '@chakra-ui/react';
import { connect } from 'react-redux';


import ProdusCardToBuy from '../components/ProdusCardToBuy';

const EnterPage = (props) => {
  console.log("produs", props.produs);
  return (
    <div>
      <Box rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        mt="1%"
        ml="28%"
        mb="1%"
        w={"50%"}
        p={8}>
        <Heading as="h1" textAlign="center" paddingBottom="36px">
          Produse
      </Heading>
        {
          props.produs ?
            props.produs.map((produs, id) => {
              return <ProdusCardToBuy key={id} produs={produs} />;
            }) : null
        }


      </Box>

    </div>
  );
}
const mapStateToProps = (state) => {
  return { loading: state.loading, error: state.error, produs: state.produs };
};

export default connect(mapStateToProps)(EnterPage);