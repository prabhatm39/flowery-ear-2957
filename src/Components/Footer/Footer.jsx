import { Box, Stack,Text,Image,SimpleGrid } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import styles from "../Navbar/Navbar.module.css"

const Footer = () => {
  const isAuth=useReducer((store)=>store.isAuth)
  console.log(isAuth)
  return (
    <Stack>
    <Stack direction="row" className={styles.FooterMainBox} style={{display:"flex", gap:"3rem", padding:"2rem"}} >
      <Stack spacing="4"  width="30%" style={{paddingTop:"1rem"}}>
            
              <div style={{col:"blue",cursor:"pointer"}}>
              <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg" alt="" 
              style={{ height:"40px", width:"130px"}}
              />

              </div>
            <Text fontSize={'sm'} textAlign="left" style={{fontSize:"12px"}}>
            India's Largest Travel Community
            </Text>
            <hr/>
            <img src="https://lh3.googleusercontent.com/RyLoNcOmb91IxHIP9NWfC82chbsCsT-5R25efns1FmuM8xz6znE4CRjIEBosZ1FH2xG1UqH6Axyp-vPFnm4sazbrsaB-S0QT_cN9uWU9UKoSQYCjYQ=s0" alt="" 
             style={{ height:"40px", width:"130px"}}
            />
            <Box>
            
            </Box>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left" >
        <h1 className={styles.heading} style={{marginTop:"1rem"}}> About Tripto</h1>
        <Text style={{marginTop:"1rem"}}>How it Works</Text>
        <Text style={{marginTop:"1rem"}}>FAQ's</Text>
        <Text style={{marginTop:"1rem"}}>Goods</Text>
        <Text style={{marginTop:"1rem"}}>Privacy Policy</Text>
        <Text style={{marginTop:"1rem"}}>Terms & Conditions</Text>
        <Text style={{marginTop:"1rem"}}>Careers</Text>
        <Text style={{marginTop:"1rem"}}>Goods</Text>
        <Text style={{marginTop:"1rem"}}>contact Us</Text>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading} style={{marginTop:"1rem"}}>Products</h1>
        <Text style={{marginTop:"1rem"}}>Tour Packages</Text>
        <Text style={{marginTop:"1rem"}}>Travel Guides</Text>
        <Text style={{marginTop:"1rem"}}>Trips & Itineries</Text>
        <Text style={{marginTop:"1rem"}}>Kerala Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Weekend Gateways</Text>
        <Text style={{marginTop:"1rem"}}>Place to Visit</Text>
        <Text style={{marginTop:"1rem"}}>Other Travel Categories</Text>
        <Text style={{marginTop:"1rem"}}>Tripoto Forum</Text>
        <Text style={{marginTop:"1rem"}}>Honeymoon Packages</Text>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading}>Important Travel Links</h1>
        <Text style={{marginTop:"1rem"}}>Goa Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Dubai Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Singapore Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Kerala Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Manali Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Bali Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Sri Lanks Tourism</Text>
        <Text style={{marginTop:"1rem"}}>Honeymoon Destinations in India</Text>
      </Stack>
      <Stack spacing="2"  width="18%" textAlign="left">
        <h1 className={styles.heading} style={{marginTop:"1rem"}}>Partner Programs</h1>
        <Text style={{marginTop:"1rem"}}>Buy Travel Leads</Text>
        <Text style={{marginTop:"1rem"}}>Partner With Us</Text>
        <Text style={{marginTop:"1rem"}}>Earn Credits</Text>
        <Text style={{marginTop:"1rem"}}>Get Paid To Travel</Text>
        <Text style={{marginTop:"1rem"}}>Import Blog To Itinery</Text>
        <Text style={{marginTop:"1rem"}}>Tripoto Ai</Text>
      </Stack>
     
    </Stack>
 
    
    <Stack direction="column">
      <hr className={styles.hrtag} style={{marginTop:"1rem"}}></hr>
    <Text style={{textAlign:"center", marginTop:"1rem"}}>© All rights reserved.</Text>

  </Stack>
  </Stack>
   
   
  )
}

export default Footer