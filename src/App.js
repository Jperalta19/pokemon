import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarr from './components/Navbarr.jsx'
import Main from './pages/Main.jsx'
import Items from './pages/Items.jsx'
import Pokemon from './pages/Pokemon.jsx'

function App() {
  return (
    <div className="App">
    <Router>
    <Navbarr/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Pokemon' element={<Pokemon/>}/>
        <Route path='/Items' element={<Items/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
