import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Events/>
        <About/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;