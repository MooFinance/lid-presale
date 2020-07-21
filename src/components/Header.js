import React from 'react';
import { Text, Box, Flex, Image, Link, Button } from "@chakra-ui/core"
import Blockie from "./Blockie"

export default function Header({web3, address, onConnect}) {

  return (
    <Box w="100%" bg="lid.bgGray" m="0" pt="10px">
      <Flex maxW="1200px" align="center" ml="auto" mr="auto" p={["20px", "20px", "0px"]} pb="0px">
        <Link display="inline-block" href="https://lid.dev" m="0px" ml="-3px">
          <Image src="/lid_h.png" alt="Lid.Dev Website" w="auto" h="65px"/>
        </Link>
        { (web3 && address) ?
          (<Box ml="auto" display="inline-block">
            <Blockie address={address} size={40} />
            <Text fontSize="10px" textAlign="center" fontFamily="monospace" color="lid.dkGray">{address.substring(0, 6)}</Text>
          </Box>)
          :
          (<Button variant="outline" borderColor="lid.violet" color="lid.violet" ml="auto" p="28px" w="140px" onClick={onConnect}>Connect</Button>)
        }
      </Flex>
    </Box>
  );
}
