import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../componants/Home'
import Golary from '../componants/Golary';
import Navbar from '../componants/Navbar';
import Users from '../componants/Users';
import Contact from '../componants/Contact';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Add from '../componants/Add';
import Edit from '../componants/Edit';
function App() {
  return (
    <div className="md:grid grid-cols-5 bg-gray-800 " >
      <div >
        <Navbar />
      </div>
      <div className=" fixed z-8 ml-4 mb-5 place-content-end h-full ">
        <div><p className='animate-ping'><ArrowBackIcon className='text-blue-50 mb-10'/></p></div>
      </div>
      <div className='sm:col-span-5   sm:h-screen '>
        <div className='w-full border-1 col-span-4 '>
          <Routes >
            <Route path='/Golary' element={<Golary />} />
            <Route path='/' element={<Home />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Add' element={<Add />} />
            <Route path='/Edit/:id' element={<Edit />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
