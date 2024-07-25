import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

function App() {
  const apiKey = 'e3fc791db87347d7a982ccc92e1f1427';
  // const apiKey = 'd2dd3a1fc33e42b88e476744a2ee5d52';
  const pageSize = 12;
  document.body.style.backgroundColor = "#374151";
  document.body.style.color = "white";
  return (
    <>
      <Navbar />
      <Grid apiKey={apiKey} pageSize={pageSize}/>
    </>
  );
}

export default App;
