import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NavBottom from './Components/NavBottom';
import NavTop from './Components/NavTop';
import useFetch from './Components/useFetch';
import Admission from './Pages/Admission';
import CalendarComp from './Pages/CalendarComp';
import Staff from './Pages/Staff';
import Mission from './Pages/Mission';
import RecordBook from './Pages/RecordBook';
import Student from './Pages/Student';


function App() {
  const {data: user, error, isPending} = useFetch('http://localhost:8000/users/1');
  const {data: apiData, error: apiError, isPending: apiIsPending} = useFetch('http://localhost:8000/apiData/1');
  const { data: menus, error: menuError, isPending: menuIsPending } = useFetch('http://localhost:8000/menus')


  return (
    <div className="App">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {user && (
        <div>
          <Router>
            <nav>
                <NavTop user={user} />
                <NavBottom menus={menus} error={menuError} isPending={menuIsPending} />
            </nav>

            <div className="content">
              <Routes>
                <Route path="/" element={<Home user={user}/>} />
                <Route path="/calendar" element={<CalendarComp user={user} apiData={apiData}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/student" element={<Student/>}/>
                <Route path="/staff" element={<Staff/>}/>
                <Route path="/record-book" element={<RecordBook/>}/>
                <Route path="/mission" element={<Mission/>}/>
              </Routes>
            </div>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
