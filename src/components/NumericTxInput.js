import React, { useState, useEffect } from "react";
import { Box, Text, Button,
  NumberInput,
  NumberInputField } from "@chakra-ui/core"

export default function NumericTxInput({web3,address,cap,min,setVal,val,handleClick,name,description,placeholder}) {
  const toBN = web3.utils.toBN
  const toWei = web3.utils.toWei
  const fromWei = web3.utils.fromWei
  const toEtherString = (wei)=>{
    if(isNaN(wei)) return ""
    if(wei === "") return ""
    return Math.floor(Number(fromWei(wei))).toString()
  }

  return(
    <Box w="100%" pb="40px">
      <Text fontSize="36px" color="lid.dark" m="0" p="0" mt="-5px">
        {name}
      </Text>
      <Text display="inline-block" color="lid.blue" m="0" p="0" mt="-5px" mr="20px">
        {description}
      </Text>
      <Text display="inline-block" color="lid.red" m="0" p="0" mt="-5px">
        Max: {toEtherString(cap)}
      </Text>
      <NumberInput display="block" w="100%"
        value={toEtherString(val)}
        step={1}
        min={Number(toEtherString(min))}
        max={Number(toEtherString(cap))}
      >
        <NumberInputField type="number" placeholder={placeholder}
          borderColor="lid.ltGray"
          focusBorderColor="lid.blue"
          errorBorderColor="lid.red"
          onChange={e => {
            if(isNaN(e.target.value)){
              return
            }
            if(e.target.value === "" || e.target.value == null){
              setVal("")
              return
            }
            if(e.target.value > 250000000) return

            setVal(toWei(e.target.value))
        }} />
      </NumberInput>
      <Button display="inline-block" color="white" bg="lid.teal" h="50px" w="240px" mt="20px" mr="20px"
        onClick={handleClick}
      >
        {name}
        </Button>
      <Button display="inline-block" color="lid.buttonFgGray" bg="lid.buttonBgGray" h="50px" w="90px" mt="20px"
        onClick={()=>setVal(cap)}
      >
        Max
      </Button>
    </Box>
  )
}
//value={toNumericEther(val)} min={0} max={toNumericEther(cap)}
//lampValueOnBlur={true}
//onChange={e => setVal(e.target.value)}
//
