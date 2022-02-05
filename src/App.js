import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";

const HatPage = () => {
  return(
  <div>
    <h1>hello</h1>
  </div>
  )}

function App() {
  
  return( 
      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='shop/hats' element={<HatPage/>}/>
        </Routes>
      </div>
);}

export default App;
