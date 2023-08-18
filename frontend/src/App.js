import './App.css';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
import Read from './Components/Read';
import Update from './Components/Update';
import Delete from './Components/Delete';
import { 
  BrowserRouter as Router,
   Routes,
    Route
   } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Create />}/>
        <Route path='/add' element={<Create />}/>
        <Route path='/fetch' element={<Read />}/>
        <Route path='/update' element={<Update />}/>
        <Route path='/remove' element={<Delete />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
