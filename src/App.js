
import { Routes ,Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/todo' element={<Todo/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
