
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import {Home,Login} from './pages/index';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
