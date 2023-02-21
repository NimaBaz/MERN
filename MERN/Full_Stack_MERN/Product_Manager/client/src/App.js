import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './views/Main';
import { Routes, Route, Link } from "react-router-dom";
import Details from "./components/Detail";
import Update from './components/Update';
import Form from './components/ItemForm';

function App() {
  return (
    <div className="main">
      <div className='nav-bar'>
        <li><Link to={"/"} className="tabs">Home</Link></li>
      </div>
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/item" element={<Form/>}></Route>
        <Route path="/item/:id" element={<Details />}></Route>
        <Route path="/item/:id/edit" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
