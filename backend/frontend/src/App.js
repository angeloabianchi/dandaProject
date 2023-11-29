import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <div className="App">
        <div className="App-header">
          <header>
            <NavBar/>
          </header>
        </div>
        
        <div className="Content">
          <main>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contacts" element={<Contacts />} />
              <Route exact path="/project/:name" element={<Project />} />
            </Routes>
          </main>
        </div>

        <div className="footer">
          <Footer />
        </div>

      </div>
        
    </Router>
  );
}

export default App;