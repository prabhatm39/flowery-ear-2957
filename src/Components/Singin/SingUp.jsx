import { useRef, useState } from 'react';
import styles from "./SingUp.module.css";
// import LoginSignup from "./LoginSignup.png"
import { useDispatch } from 'react-redux';
// import { register } from '../Redux/AuthRedux/action';
import { useNavigate } from 'react-router-dom';
// import { REGISTER_SUCCESS } from '../Redux/AuthRedux/actionType';
import {Navbar} from '../Navbar/Navbar';
// import Footer from '../Footer';
//  import { Stack,Box,Button} from '@chakra-ui/react';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [description, setdescription] = useState("")
  const [toggleType, setToggleType] = useState(false);
  const [mobile, setmobile] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const otp = useRef();
  const handleSignUp = () => {
localStorage.setItem("name",email)
    let obj = {
      username: name,
      email: email,
      name: "aa",
      password: password,
      mobile: mobile,
      description: "AsAAA"
    }
    // dispatch(register(obj)).then((r) => {
    //   if (r == REGISTER_SUCCESS) {
        navigate("/auth/login")
    //   }
    // })
    console.log(obj)
  };

  return (
    <>
  
      <div style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",width:"350px", height:"630px",margin:"auto",marginTop:"30px",justifyContent:"center",lineHeight:"30px",padding:"15px",borderRadius:"10px"}}>
        <h1 className={styles.title}>SignUp</h1>
        <div>
        <button className={styles.buttonFacebook} style={{height:"1.5rem"}} >Login with Facebook</button>
                <button  className={styles.buttonGoogle} style={{height:"1.5rem"}} >Login with Google</button>
                <p style={{textAlign:"center"}}>OR</p>
          <div>
            <div>
              <div className={styles.text}>NAME</div>
              <input  placeholder="name" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} 
              style={{height:"1.5rem"}}
              />
              <div  className={styles.text}>EMAIL</div>
              <input placeholder="email" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} 
              style={{height:"1.5rem"}}
              />
              <div className={styles.text}>MOBILE NUMBER</div>
              <input placeholder="+91"  className={styles.input} value={mobile} onChange={(e) => setmobile(e.target.value)} 
              style={{height:"1.5rem"}}
              />
              <div className={styles.text} >
                <div>PASSWORD</div>
              </div>
              <input placeholder="password"   className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} 
              style={{height:"1.5rem"}}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <button className={styles.buttonSignup} onClick={handleSignUp} style={{height:"1.5rem", marginBottom:"1rem"}}>
                SIGN UP
              </button>

              <div>
                <hr></hr>
                <div style={{textAlign:"center"}}>OR</div>
                <hr></hr>
              </div>
            </div>

            <div className={styles.bottomLine} style={{marginTop:"1rem"}}>
              Already account? <a href="/auth/login">Log in</a>
            </div>
          </div>


        </div>

      </div>
      {/* <Footer/> */}

    </>


  )

}