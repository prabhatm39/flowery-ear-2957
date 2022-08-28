import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainRoute from './MainRoute/MainRoute';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
   <Navbar />
     <MainRoute />
     <br/>
     <br/>
     <div style={{marginTop:"2rem"}}>
                          <hr/>
                        </div>
     <Footer /> 
    </div>
  );
}

export default App;
