import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBottom from './Components/NavBottom';
import NavTop from './Components/NavTop';
import useFetch from './Components/useFetch';
import Admission from './Pages/Admission';

function App() {
  const {data: user, error, isPending} = useFetch('http://localhost:8000/users/1');

  return (
    <div className="App">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {user && (
        <div>
          <Router>
            <nav>
                <NavTop user={user} />
                <NavBottom />
            </nav>

            <div className="content">
              <Routes>
                <Route path="/" element={<Home user={user}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/admission" element={<Admission />} />
              </Routes>
            </div>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;