import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const apiKey = 'e3fc791db87347d7a982ccc92e1f1427';
  // const apiKey = 'd2dd3a1fc33e42b88e476744a2ee5d52';
  const pageSize = 12;
  const [country,setCountry] = useState('in');
  document.body.style.backgroundColor = "#374151";
  document.body.style.color = "white";
  return (
    <>
      <BrowserRouter>
      <Navbar key="country"country={country} setCountry={setCountry}/>
      <Routes>
      <Route path="/" element={<Grid key={`${country}general`} apiKey={apiKey} pageSize={pageSize} country={country} category='general'/>}></Route>
      <Route path="/business" element={<Grid key={`${country}business`} apiKey={apiKey} pageSize={pageSize} country={country} category='business'/>}></Route>
      <Route path="/entertainment" element={<Grid key={`${country}entertainment`} apiKey={apiKey} pageSize={pageSize} country={country} category='entertainment'/>}></Route>
      <Route path="/health" element={<Grid key={`${country}health`} apiKey={apiKey} pageSize={pageSize} country={country} category='health'/>}></Route>
      <Route path="/science" element={<Grid key={`${country}science`} apiKey={apiKey} pageSize={pageSize} country={country} category='science'/>}></Route>
      <Route path="/sports" element={<Grid key={`${country}sports`} apiKey={apiKey} pageSize={pageSize} country={country} category='sports'/>}></Route>
      <Route path="/technology" element={<Grid key={`${country}technology`} apiKey={apiKey} pageSize={pageSize} country={country} category='technology'/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
