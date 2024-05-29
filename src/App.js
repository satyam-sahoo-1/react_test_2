import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Services, Home } from './components/pages';


function App() {
  return (
    <>
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
