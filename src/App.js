import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>



      <main className="header">
        <NavBar/>
        <Events/>
        <About/>
        <Footer/>
      </main>
    </>
  );
}

export default App;