import { useState } from 'react';
  import styles from "../Login&Signup/Login.module.css";
//  import LoginSignup from "./LoginSignup.png"
import { useNavigate,Link } from 'react-router-dom';

//  import { Stack,Box,Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Action';
import { LOGIN_SUCCESS } from '../../Redux/ActionType';
  export default function Login() {
  
    const [toggleType, setToggleType] = useState(false);
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
   
    const HandleLogin=()=>{

      if(username && password){
        localStorage.setItem("email",username)
      var obj1={
        username,
        password
      }
      dispatch(login(obj1)).then((r)=>{
        if(r===LOGIN_SUCCESS)
        navigate("/")
      })
    }
    }

        return (
          <>
          <div style={{display:"flex"}}>
             <div className='first_image'>
                <div className={styles.sidenav}>
              <div className={styles.sidenavGrid}>
              </div>
            </div>
             </div>
      <div className='second_image' style={{width:"700px",padding:"50px",margin:"0px 100px 100px 160px",lineHeight:"35px" , margin:"60px 200px 100px 150px",textAlign:"left"}}>
         <div className={styles.afterSidenav}>
              <div className={styles.heading}>Welcome back!</div>
      
              <div className={styles.formData}>
                <div className={styles.name}>WORK EMAIL</div>
                <input value={username} onChange={(e)=>setusername(e.target.value)}/>
                <div className={styles.passwordDivision}>
                  <div>PASSWORD</div>
                  <div
                    className={styles.passwordEye}
                    onClick={() => setToggleType(toggleType ? false : true)}
                  >
                    {/* <div>{toggleType ? <BiShow /> : <GrHide />}</div> */}
                    <div>{toggleType ? "Hide" : "Show"}</div>
                  </div>
                </div>
                <input value={password} onChange={(e)=>setpassword(e.target.value)}
                />
              </div>
              <div>
                    <button onClick={HandleLogin} className={styles.handleSignUp}>
                Login
                </button>
      
                <div className={styles.hrDivision}>
                  <hr></hr>
                  <div>OR</div>
                  <hr></hr>
                </div>
                 {/* <div style={{display:"flex"}}>
                  <button className={styles.button2}>
                 Sign up with Facebook</button>
                </div> */}
                 {/* <div style={{display:"flex"}}>
                  <button className={styles.button2}>
                 Log in via with SSo</button>
                </div> */}
              </div> 
      
              <div className={styles.bottomLines}>
                Need a account? <Link to="/auth/signup">Create an account</Link>
              </div>
      
              {/* <div className={styles.conclusionLine}>
                By clicking “Create account” I agree to Lumen5’s
                <a href="https://lumen5.com/terms/">Terms of Use</a> and
                <a
                  href="https://lumen5.com/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </div> */}
            </div>

        
      </div>
           
          </div>
           
          </>
        
        
        )
          
  }