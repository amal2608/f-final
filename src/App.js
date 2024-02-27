
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';

import Event from './components/Event';
import Eventview from './components/Eventview';
import Eventedit from './components/Eventedit';
import Food from './components/Food';
import Foodview from './components/Foodview';
import UserLogin from './components/userside/Userlogin';
// import Usersignup from './components/userside/Usersiginup';
import Usersiginup from './components/userside/Usersiginup';




function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>

        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Welcomepage/>}></Route>
        <Route path="/food" element={<Food method='post'/>}></Route>
        <Route path="/foodview" element={<Foodview method='get'/>}></Route>
        <Route path='/Event' element={<Event/>}/>
        <Route path='/Eventview' element={<Eventview method='get'/>}/>
        <Route path='/Eventedit' element={<Eventedit/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/usersignup' element={<Usersiginup/>}/>
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
