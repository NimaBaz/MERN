import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './views/Main';
import { Routes, Route } from "react-router-dom";
import Details from "./components/Detail";

function App() {
  return (
    <div className="main">
      <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/item/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
