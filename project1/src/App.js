import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
function App() {
  return (
    <div className="App">
        <Navbar/> 
        <Routes>
          <Route path="/AboutMe" element ={<Aboutme/>}/>
          <Route path="/Skills" element ={<Skills/>}/>
          <Route path="/Qualifications" element ={<Qualifications/>}/>
          <Route path="/Hobbies" element ={<Hobbies/>}/>
          <Route path="/Experience" element ={<Experience/>}/>
          <Route path="/Projects" element ={<Projects/>}/>




          


        </Routes>


    </div>
  );
}

export default App;
