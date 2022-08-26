import React from 'react'
import { Box, Image, Button, Stack, Input,Text } from "@chakra-ui/react";
import styles from "./Navbar.module.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box backgroundColor="rgb(47,155,219)"  display="flex">
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="10px"
      width="62%"
    >
      <Stack
        direction="row"
        alignItems="center"
      >
        <Image
          width="140px"
          cursor="pointer"     
          src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
        />
        <Box paddingLeft="27px"   >
          <Input
          width="500px"
          backgroundColor="white"
            type="text"
            color="black"
           placeholder="search for itineries,destinations,hotels or activities"
          />
        </Box>
      </Stack>
</Box>
<Box  display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="20px"
      width="38%"
      color="white"
    >
    <Stack  direction="row"
        alignItems="center"
        width="100%"
        fontSize="15px"
        >
        <div  paddingLeft="27px" className={styles.dropdown}><span><b>Inspirations &#9662;</b></span>
        <div className={styles.dropdownC}>
          <div className={styles.dropList}>
              <p>Visit Dubai</p>
            <p>Visit Singapore</p>
            <p>Beaches</p>
            <p>Mountains</p>
            <p>Heritage</p>
            <p>Weekend Guide</p>
            <p>Upcoming Festivals</p>
            <p>Honeymoon Packages</p>
            <p>Wildlife Tourism</p>
            <p>Road Trips</p>
            <p>Gateways Guide</p>
            <p>Luxury Travel</p>
            <p>Explore More</p>

          </div>
      
        </div>
        </div>
        

        <Text paddingLeft="27px"><b>Forum</b></Text>
        <Text paddingLeft="27px"><b>Packages</b></Text>
        <div  paddingLeft="27px" className={styles.dropdown}><span><b>Publish Trip &#9662;</b></span>
        <div className={styles.dropdownC}>
        <div className={styles.dropList}>
        <p>Create New</p>
        <p>Upload/Photos/Videos</p>
        <p>Import Blog</p>

          </div>
        
        </div>
        </div>
        <Text onClick={()=> navigate("/auth/login")} paddingLeft="27px"><b>Sign In</b></Text>

      </Stack>
</Box>
</Box>
  )
}

export default Navbar