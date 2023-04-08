import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
