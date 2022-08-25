import { useRef, useState } from 'react';
import styles from "../Login&Signup/SignUp.module.css";
// import LoginSignup from "./LoginSignup.png"
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { REGISTER_SUCCESS } from '../../Redux/ActionType';
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
    dispatch(register(obj)).then((r) => {
      if (r == REGISTER_SUCCESS) {
        navigate("/auth/login")
      }
    })
    console.log(obj)
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className='first_image'>
          <div className={styles.sidenav}>
            
            <div className={styles.sidenavGrid}>
            </div>
          </div>
        </div>
        <div className='second_image' style={{ width: "700px", padding: "50px", margin: "0px 100px 100px 160px", lineHeight: "38px", textAlign: "left" }}>
          <div className={styles.afterSidenav}>
            <div className={styles.heading}>Get started with a free account</div>

            <div className={styles.formData}>
              <div className={styles.name}>FIRST NAME</div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className={styles.name}>WORK EMAIL</div>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <div className={styles.name}>MOBILE NUMBER</div>
              <input value={mobile} onChange={(e) => setmobile(e.target.value)} />
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
              <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {/* <div className={styles.afterPassword}>
              <div>
                <div>
                  <span>•</span> One lowercase character
                </div>
                <div>
                  <span>•</span> One uppercase character
                </div>
              </div>
              <div>
                <div className={styles.three}>
                  <span>•</span> 8   characters minimum
                </div>
                <div>
                  <span>•</span> Contains a number or symbol
                </div>
              </div>
            </div> */}

            <div style={{ marginTop: "30px" }}>
              <button onClick={handleSignUp} className={styles.handleSignUp}>
                Create an account
              </button>

              <div className={styles.hrDivision}>
                <hr></hr>
                <div>OR</div>
                <hr></hr>
              </div>
              <div style={{ display: "flex" }}>
                <button className={styles.button2}>
                  {/* <div><img style={{marginLeft:"200px"}}src="https://www.svgrepo.com/show/158427/facebook.svg" alt="facebook" /></div> */}
                  Sign up with Facebook</button>
              </div>
            </div>

            <div className={styles.bottomLines}>
              Already have a Lumen5 account? <a href="/auth/login">Log in</a>
            </div>

            <div className={styles.conclusionLine}>
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
            </div>
          </div>


        </div>

      </div>

    </>


  )

}