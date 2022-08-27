import { Box, Stack,Text,Image,SimpleGrid } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import styles from "./Navbar.module.css"

const Footer = () => {
  const isAuth=useReducer((store)=>store.isAuth)
  console.log(isAuth)
  return (
    <Stack>
    <Stack direction="row" className={styles.FooterMainBox}  >
      <Stack spacing="4"  width="30%">
            
              <div style={{col:"blue",cursor:"pointer",}}>
              <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg" alt="" />

              </div>
            <Text fontSize={'sm'} textAlign="left">
              © 2022 Chakra Templates. All rights reserved
            </Text>
            <img src="https://lh3.googleusercontent.com/RyLoNcOmb91IxHIP9NWfC82chbsCsT-5R25efns1FmuM8xz6znE4CRjIEBosZ1FH2xG1UqH6Axyp-vPFnm4sazbrsaB-S0QT_cN9uWU9UKoSQYCjYQ=s0" alt="" width="150px"/>
            <Box>
            
            </Box>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading}> About Tripto</h1>
        <Text>How it Works</Text>
        <Text>FAQ's</Text>
        <Text>Goods</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms & Conditions</Text>
        <Text>Careers</Text>
        <Text>Goods</Text>
        <Text>contact Us</Text>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading}>Products</h1>
        <Text>Tour Packages</Text>
        <Text>Travel Guides</Text>
        <Text>Trips & Itineries</Text>
        <Text>Kerala Tourism</Text>
        <Text>Weekend Gateways</Text>
        <Text>Place to Visit</Text>
        <Text>Other Travel Categories</Text>
        <Text>Tripoto Forum</Text>
        <Text>Honeymoon Packages</Text>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading}>Important Travel Links</h1>
        <Text>Goa Tourism</Text>
        <Text>Dubai Tourism</Text>
        <Text>Singapore Tourism</Text>
        <Text>Kerala Tourism</Text>
        <Text>Manali Tourism</Text>
        <Text>Bali Tourism</Text>
        <Text>Sri Lanks Tourism</Text>
        <Text>Honeymoon Destinations in India</Text>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading}>Partner Programs</h1>
        <Text>Buy Travel Leads</Text>
        <Text>Partner With Us</Text>
        <Text>Earn Credits</Text>
        <Text>Get Paid To Travel</Text>
        <Text>Import Blog To Itinery</Text>
        <Text>Tripoto Ai</Text>
      </Stack>
      <hr ></hr>
    </Stack>
    
    <Stack direction="column">
      <hr className={styles.hrtag}></hr>
    <Text>© All rights reserved.</Text>

  </Stack>
  </Stack>
   
   
  )
}

export default Footer