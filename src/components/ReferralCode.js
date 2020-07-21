import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Text, Box, Button } from "@chakra-ui/core"
import addresses from "../contracts/addresses";
import NumericTxInput from "./NumericTxInput"

export default function ReferralCode({address}) {
  return (
    <Box w="100%" maxWidth="1200px" bg="white" m="0" ml="auto" mr="auto" mb="40px" mt={["10px","20px","20px","20px"]}
      p={["20px", "20px", "0px"]} pb="20px">
      <CopyToClipboard text={"https://stake.lid.dev/#/"+address}>
        <Button display="block" color="lid.buttonFgGray" bg="lid.buttonBgGray"
          h="50px" w="140px" float="right" mt="25px">
          Copy
        </Button>
      </CopyToClipboard>
      <Text fontSize="36px" color="lid.dark" width="100%">
        Referral Code
      </Text>
      <Text color="lid.blue" mt="10px" mb="10px">
        2% rewards when anyone uses to stake
      </Text>
      <Text wordBreak="break-word" p="15px" pl="25px" color="lid.dkGray" border="solid 1px" borderColor="lid.ltGray"
        w="100%" borderRadius="5px"
      >
        https://stake.lid.dev/#/{address}
      </Text>
    </Box>
  );
}
