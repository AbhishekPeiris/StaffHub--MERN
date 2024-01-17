import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landingscreen from './screens/landingscreen';
import Homescreen from './screens/homescreen';
import Footer from './components/footer';
import Createstaffscreen from './screens/createstaffscreen';
import Staffprofilescreen from './screens/staffprofilescreen';
import Updatestaffscreen from './screens/updatestaffscreen';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navbar />

        <Routes>
          <Route path='/home' element = {<Homescreen />} />
          <Route path='/createstaffmember' element = {<Createstaffscreen />} />
          <Route path='/home/:staffId' element = {<Staffprofilescreen />} />
          <Route path='/updatestaffmember/:staffId' element = {<Updatestaffscreen />} />
          <Route path='/' element = {<Landingscreen />} />
        </Routes>

        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
