import React from 'react';
import { Text, Box, Link, Image } from "@chakra-ui/core"
import addresses from "../contracts/addresses";

export default function Footer() {

  return (
    <>
      <Box w="100%" minH="100px" bg="lid.brandDark" color="lid.bg"
      position="relative"  p="40px" mt="40px"
        fontWeight="normal"
        textAlign="center" fontSize="18px" border-top="solid 1px gray"
        ml="auto" mr="auto" borderTop="solid 1px" borderColor="lid.ltGray" >
        <Link display="inline-block" href="https://lid.sh" m="0px" >
          <Image src="/LID_white_h.png" alt="Lid.sh Website" w="auto" h="35px" m="0px" />
        </Link>
        <Text color="lid.buttonFgGray" m="0px">
        © 2020 Liquidity Dividends Protocol. All Rights Reserved.
        </Text>
      </Box>
    </>
  );
}
