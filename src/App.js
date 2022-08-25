import logo from './logo.svg';
import './App.css';
import Login from "./components/Login&Signup/Login"
import SignUp from "./components/Login&Signup/SignUp"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Mainrouting from './components/Mainrouting';

function App() {
  return (
    <div className="App">
      <Mainrouting/>
     {/* <Login/> */}
     {/* <SignUp/> */}
     {/* <Navbar/> */}
     <Footer/>
    </div>
  );
}

export default App;
