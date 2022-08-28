import React from 'react'
import { Box, Image, Button, Stack, Input,Text, Flex } from "@chakra-ui/react";
import styles from "./Navbar.module.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate()
  const [first, setfirst] = React.useState(false);
  const isAuth = useSelector((store) => store.AuthRedux.isAuth);
  console.log("isAuth", isAuth);
  const gotodubai = () => {
    navigate("/visit-dubai")
  }
const chaloghar = () => {
  navigate("/")
}
  const gotopack = () => {
    navigate("/packages")
  }
  return (
    <Box backgroundColor="rgb(47,155,219)" style={{display:"flex", justifyContent:"space-between", backgroundColor:"rgb(47,155,219)", color:"white", alignItems:"center"}}   >
    <Box style={{display:"flex"}}
    
      // display="flex"
      
      // justifyContent="space-between"
      // borderBottom="1px solid #dddee6"
      // p="10px"
      // width="62%"
    >
      <Stack
        // direction="row"
        alignItems="center"
        style={{display:"flex",  gap:"5rem", backgroundColor:"rgb(47,155,219)"}}

      >
        <Box style={{backgroundColor:"rgb(47,155,219)"}} onClick={chaloghar}>
        <Image
          width="140px"
          cursor="pointer" 
          style={{ background:"rgb(47,155,219)", height:"50px", width:"140px"}}    
          src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
        />
        </Box>
        <Box paddingLeft="3rem" style={{ backgroundColor:"rgb(47,155,219)"}}  >
          <Input
          width="500px"
          backgroundColor="white"
            type="text"
            color="black"
           placeholder="search for itineries,destinations,hotels or activities"
           style={{width:"500px", border:"none", backgroundColor:"white", height:"1.5rem", marginTop:"0.8rem"}}
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
      style={{backgroundColor:"rgb(47,155,219)"}}
    >
    <Stack  direction="row"
        alignItems="center"
        width="100%"
        fontSize="15px"
        style={{display:"flex", fontSize:"15px", gap:"1rem", backgroundColor:"rgb(47,155,219)", alignItems:"center"}}
        >
        <div  paddingLeft="27px" className={styles.dropdown}  style={{backgroundColor:"rgb(47,155,219)"}}><span ><b  style={{backgroundColor:"rgb(47,155,219)"}} onClick={gotodubai}>Inspirations &#9662;</b></span>
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
        

        <Text paddingLeft="27px"  style={{backgroundColor:"rgb(47,155,219)"}}><b  style={{backgroundColor:"rgb(47,155,219)"}}>Forum</b></Text>
        <Text paddingLeft="27px"  style={{backgroundColor:"rgb(47,155,219)"}}><b  style={{backgroundColor:"rgb(47,155,219)"}} onClick={gotopack}>Packages</b></Text>
        <div  paddingLeft="27px" className={styles.dropdown}  style={{backgroundColor:"rgb(47,155,219)"}}><span><b  style={{backgroundColor:"rgb(47,155,219)"}}>Publish Trip &#9662;</b></span>
        <div className={styles.dropdownC}>
        <div className={styles.dropList}>
        <p>Create New</p>
        <p>Upload/Photos/Videos</p>
        <p>Import Blog</p>

          </div>
        
        </div>
        </div>
        {/* <Text onClick={()=> navigate("/auth/login")} paddingLeft="27px"><b>Sign In</b></Text> */}
        <div className={styles.userLogo}  style={{backgroundColor:"rgb(47,155,219)"}}> {!isAuth ?  <Text onClick={()=> navigate("/auth/login")} paddingLeft="27px"  style={{backgroundColor:"rgb(47,155,219)"}}><b  style={{backgroundColor:"rgb(47,155,219)"}}>Sign In</b></Text> : <div className={styles.userDetails}>
          <div  paddingLeft="27px" className={styles.dropdownuser}  ><span><b>P</b></span>
        <div className={styles.dropdownuseropt}>
        <div className={styles.dropListuser}>
        <p>Prabhat Mishra</p>
        <hr className={styles.hrtag}></hr>
        <p>Credits </p>
        <p>Bookings</p>
        <p>Notifications</p>
        <p>Messages</p>
        <p>Passwords</p>
        <p>Logout</p>

          </div>
        
        </div>
        </div>
        </div> }</div>

      </Stack>
</Box>
</Box>
  )
}

export default Navbar