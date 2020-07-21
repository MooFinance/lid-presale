import React from 'react';
import { Text, Box, Flex, Link, Grid } from "@chakra-ui/core"
import addresses from "../contracts/addresses";

export default function Subheading({web3, address}) {

  return (
    <Box w="100%" bg="lid.bgGray" m="0" pb="20px">
      <Flex maxW="1200px" align="center" ml="auto" mr="auto" p="0px" pt="20px" pb="20px">
        <Grid templateRows="max-content" templateColumns="590px 285px 285px" w="100%" gap="20px">
          <Box p="0" >
            <Text fontWeight="bold" fontSize="36px" color="lid.dark" m="0" p="0">
              Lid Staking
            </Text>
            <Text color="lid.dkGray" mt="10px" mb="10px">
              Manage your current holdings and stake to earn more Lid.
            </Text>
            <Text color="lid.dkGray">
              Verified Lid Contract:
            </Text>
            <Link color="lid.blue" href={"https://etherscan.io/token/"+addresses.lidToken}>
              {addresses.lidToken}
            </Link>
          </Box>
          <Box bg="lid.violet" color="white" borderRadius="5px" p="15px">
            <Text w="100%" mt="5px">
              Your Staked Lid
            </Text>
            <Text fontSize="36px" w="100%">
              20k
            </Text>
            <Text w="100%">
              <Text as="span" color="lid.teal" >20%</Text> of Total Staked
            </Text>
          </Box>
          <Box bg="lid.violet" color="white" borderRadius="5px" p="15px">
            <Text w="100%" mt="5px" mb="15px">
              Your Lid Wallet
            </Text>
            <Text fontSize="36px" w="100%">
              10
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
}
