import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Routes>
            <Route path='/' element = {<Login />} ></Route>
            <Route path='/home' element = {<Home />} ></Route>
            <Route path='/about' element = {<About />} ></Route>
            <Route path='/contact' element = {<Contact />} ></Route>
            <Route path='/projects' element = {<Projects />} ></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
