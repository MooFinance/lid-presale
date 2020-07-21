import React from 'react';
import { Text, Box, Flex, Image, Grid } from "@chakra-ui/core"
import addresses from "../contracts/addresses";
import {shortEther} from "../utils"

export default function ProjectStats({web3, address, totalLid, totalLidStaked, totalLidStakers}) {
  const toBN = web3.utils.toBN
  return (
    <Box w="100%" bg="lid.bgGray" m="0" pb="20px">
      <Flex maxW="1200px" ml="auto" mr="auto" p={["20px", "20px", "0px"]} pt="20px" pb="20px">
        <Grid templateRows="max-content" templateColumns={["auto", "387px 387px 387px"]} w="100%" gap="20px">
          <Box bg="white" p="20px" pt="30px" pb="30px" border="solid" borderColor="lid.ltGray" borderRadius="5px" borderWidth="1px">
            <Image width="auto" height="70px" src="/logo.png" alt="Lid Logo" float="left" pr="20px" />
            <Text fontSize="36px" color="lid.dark" m="0" p="0" mt="-5px">
              {shortEther(totalLid,web3)}
            </Text>
            <Text color="lid.dkGray" m="0" p="0" mt="-5px">
              Total Lid
            </Text>
          </Box>
          <Box bg="white" p="20px" pt="30px" pb="30px" border="solid" borderColor="lid.ltGray" borderRadius="5px" borderWidth="1px">
            <Image width="auto" height="70px" src="/logo.png" alt="Lid Logo" float="left" pr="20px" />
            <Text fontSize="36px" color="lid.dark" m="0" p="0" mt="-5px">
              {shortEther(totalLidStaked,web3)}
            </Text>
            <Text color="lid.dkGray" m="0" p="0" mt="-5px">
              Total Staked Lid
            </Text>
            <Text fontSize="11px" color="lid.dkGray" m="0" p="0" mt="-5px">
              Percentage of Total Supply: <Text as="span" color="lid.ltViolet">{
                toBN(totalLid).gt(toBN(0)) ?
                toBN(totalLidStaked).mul(toBN("10000")).div(toBN(totalLid)).toNumber()/100
                : "0"
              }%</Text>
            </Text>
          </Box>
          <Box bg="white" p="20px" pt="30px" pb="30px" border="solid" borderColor="lid.ltGray" borderRadius="5px" borderWidth="1px">
            <Image width="auto" height="70px" src="/logo.png" alt="Lid Logo" float="left" pr="20px" />
            <Text fontSize="36px" color="lid.dark" m="0" p="0" mt="-5px">
              {totalLidStakers}
            </Text>
            <Text color="lid.dkGray" m="0" p="0" mt="-5px">
              Total Lid Stakers
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
}
