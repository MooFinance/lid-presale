import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Text, Box, Button } from "@chakra-ui/core"
import addresses from "../contracts/addresses";
import NumericTxInput from "./NumericTxInput"

export default function ReferralCode({address}) {
  return (
    <Box textAlign="left" border="solid 1px" borderRadius="5px" borderColor="lid.stroke" w="100%" maxWidth="900px" bg="white" m="0" ml="auto" mr="auto" mb="40px" mt={["10px","20px","20px","20px"]}
       p="20px" pb="20px">
      <CopyToClipboard text={"https://stake.lid.sh/#/"+address}>
        <Button display="block" color="lid.bg" bg="lid.buttonBg"
          h="50px" w="140px" float="right" mt="25px">
          Copy
        </Button>
      </CopyToClipboard>
      <Text fontSize="36px" color="lid.fg" width="100%">
        Referral Code
      </Text>
      <Text color="lid.brand" mt="10px" mb="10px">
        2.5% rewards when anyone uses to deposit
      </Text>
      <Text wordBreak="break-word" p="15px" pl="25px" color="lid.fgMed" border="solid 1px" borderColor="lid.stroke"
        w="100%" borderRadius="5px"
      >
        https://stake.lid.sh/#/{address}
      </Text>
    </Box>
  );
}
