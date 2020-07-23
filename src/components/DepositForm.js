import React, {useState, useEffect} from 'react';
import {Box, Text, Button, NumberInput, NumberInputField  } from "@chakra-ui/core"

  function shortenDecimal(decimalString) {
    decimalString = decimalString.toString()
    if(!decimalString.includes('.')) return decimalString
    return decimalString.substring(0,decimalString.indexOf('.'))
  }

export default function DepositForm({web3,rate,cap,setVal,val,handleClick}) {

  const toBN = web3.utils.toBN
  const toWei = web3.utils.toWei
  const fromWei = web3.utils.fromWei


  const [displayVal, setDisplayVal] = useState("")

  useEffect(()=>{
    if(displayVal != "" && !isNaN(displayVal))
      setVal(toWei(displayVal))
    console.log('val',val)
    console.log('rate',rate)
  },[displayVal])

  return(
    <Box w="100%" maxW="1200px" p="20px" pt="20px" ml="auto" mr="auto" textAlign="left" color="lid.fg" position="relative" border="solid 1px" borderColor="lid.stroke">
      <Text fontSize={{base:"24px",sm:"36px"}} fontWeight="bold">
        Deposit ETH for LID
      </Text>
      <Text fontSize="18px" color="blue.500">
        Minimum 0.01 ETH, Maximum 1 ETH (10 ETH + 2% for whitelisted)
      </Text>
      <Text fontSize="18px" color="red.500">
        MAX: {shortenDecimal(fromWei(cap))}
      </Text>
      <Text fontSize="18px">
        Estimated LID: {!val ? "0" : shortenDecimal(
          toBN(val).div(toBN(rate))
        )}
      </Text>

      <NumberInput fontSize="18px" w="100%" maxW="600px" mb="0px"
        display="inline-block" value={displayVal} min={0.01}
        max={shortenDecimal(fromWei(cap))} step="any" mt="10px"
        >
        <NumberInputField w="100%" h="50px" border="solid 2px" borderColor="lid.stroke" borderRadius="30px" pl="20px"
          fontSize="18px" position="relative" zIndex="1"
          type="number" bg="lid.bg" color="lid.fg" placeholder="Amount of ETH to deposit."
          whilePlaceholder={{color:"lid.fgMed" }}
          onChange={e => {
            if(isNaN(e.target.value)) return
            if(e.target.value === "") {
              setDisplayVal("")
            } else if(Number(e.target.value) > 140000000) {
              setDisplayVal("140000000")
            } else if(Number(e.target.value) < 0) {
              setDisplayVal("0")
            } else{
              setDisplayVal(e.target.value)
            }
          }} />
        <Button fontSize="18px" display="inline-block"
          border="solid 2px" borderRadius="25px" bg="lid.buttonBg" color="lid.fgLight" w="120px" h="50px"
          position="absolute" right="0px" zIndex="2" m="0px" borderColor="lid.buttonBg"
          onClick={()=>setVal(cap)}>
          Max
        </Button>
      </NumberInput>
      <Button variantColor="blue" bg="lid.brand" color="white"  border="none"  display="block"
        borderRadius="25px" w="200px" h="50px" m="0px" mt="30px"
        fontWeight="regular" fontSize="18px"
        onClick={handleClick} >
        Deposit
      </Button>

    </Box>
  )
}
