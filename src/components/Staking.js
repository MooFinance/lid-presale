import React, { useState, useEffect } from "react";
import { Text, Box, Flex, Button, Grid } from "@chakra-ui/core"
import addresses from "../contracts/addresses";
import NumericTxInput from "./NumericTxInput"

export default function Staking({web3, address, accountLid, accountLidStaked, lidStakingSC}) {
  const toWei = web3.utils.toWei
  const fromWei = web3.utils.fromWei
  const toBN = web3.utils.toBN

  let referralAddress = window.location.hash.substr(2);
  if(!referralAddress || referralAddress.length !== 42 ) referralAddress = "0x0000000000000000000000000000000000000000"

  const [stakeValue, setStakeValue] = useState("")
  const [stakeValueCap, setStakeValueCap] = useState("0")

  const [unstakeValue, setUnstakeValue] = useState("")
  const [unstakeValueCap, setUnstakeValueCap] = useState(toWei("0"))

  useEffect(()=>{
    setStakeValueCap(accountLid)
  },[accountLid])

  useEffect(()=>{
    setUnstakeValueCap(accountLidStaked)
  },[accountLidStaked])

  const handleStake = async ()=>{
    const requestBN = toBN(stakeValue)
    if(!web3 || !address || !lidStakingSC) {
      alert("You are not connected. Connect and try again.")
      return
    }
    if(requestBN.lt(toBN(toWei("10000")))){
      alert("At least 10000 MOON must be staked")
      return
    }
    if(requestBN.gt(toBN(accountLid))){
      alert("Cannot stake more lid than is in your account.")
      return
    }
    await lidStakingSC.methods.stakeWithReferrer(stakeValue,referralAddress).send({from:address})
    alert("Stake request sent. Check your wallet to see when it has completed, then refresh this page.")
  }

  const handleUnstake = async ()=>{
    const requestBN = toBN(unstakeValue)
    if(!web3 || !address || !lidStakingSC) {
      alert("You are not connected. Connect and try again.")
      return
    }
    if(requestBN.lt(toBN(toWei("1")))){
      alert("At least 1 MOON must be unstaked")
      return
    }
    if(requestBN.gt(toBN(accountLidStaked))){
      alert("Cannot unstake more lid than you have already staked.")
      return
    }
    await lidStakingSC.methods.unstake(unstakeValue).send({from:address})
    alert("Unstake request sent. Check your wallet to see when it has completed, then refresh this page.")
  }

  return (
    <Grid w="100%" maxWidth="1200px" bg="white" m="0" ml="auto" mr="auto"
      p={["20px", "20px", "0px"]} pb="20px"
      templateRows="max-content" templateColumns={["auto", "1fr 1fr", "1fr 1fr", "1fr 1fr"]} gap="20px" mt="40px"
    >
      <Box p="0px">
        <NumericTxInput
          web3={web3}
          address={address}
          cap={stakeValueCap}
          min={toWei("10000")}
          setVal={setStakeValue}
          val={stakeValue}
          handleClick={()=>handleStake()}
          name="Stake Lid"
          description="10,000 Token Minimum"
          placeholder="Amount of Lid to Stake"
        />
      </Box>
      <Box p="0">
        <NumericTxInput
          web3={web3}
          address={address}
          cap={unstakeValueCap}
          min={toWei("1")}
          setVal={setUnstakeValue}
          val={unstakeValue}
          handleClick={()=>handleUnstake()}
          name="Unstake Lid"
          description="Fee: 4% Burn, 4% Tax, 2% Referral"
          placeholder="Amount of Lid to Unstake"
        />
      </Box>
    </Grid>
  );
}
