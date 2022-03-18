import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About';
import react, { useState } from 'react'
import Alert from './components/Alert';
// import {                               it works 1)
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
//This a line just edited now.
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typ) => {
    setAlert({
      msg: message,
      type: typ
    })
    setTimeout(() => {
      setAlert(null);
    }, 2200);
  }
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0d2740';
      showAlert("Dark Mode has been enabled.", "Success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "Success")
    }
  }
  return (
    <>
      {/* Props content passed. */}
      {/* <Navbar title="TextUtils" content="Home" xyz="Services"/> */}
      {/* Props content not passed, default values will be used. */}
      {/* <Router>   it works 2 */}
      <Navbar mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-2">
      {/* <Routes>             it works 3) */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below : " mode={mode}/>}/> it works 4) */}
          {/* <Route exact path="/about" element={<About/>}/>   it works 5 */}
        <About />
            <TextForm showAlert={showAlert} heading="Enter the text below : " mode={mode}/>
      {/* </Routes> it works 6) */}
      </div>
      {/* </Router> it works 7) */}
    </>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <h1>This is a header.</h1>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"   
    //     >

    //       Learn React Learning react abcd
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
