import "./App.css";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

function App() {
  document.body.style.backgroundColor = "#374151";
  document.body.style.color = "white";
  return (
    <>
      <Navbar />
      <Grid/>
    </>
  );
}

export default App;
