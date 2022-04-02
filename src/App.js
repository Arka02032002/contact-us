// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Caraousel from "./components/Caraousel";
import Contact2 from"./components/Contact2";

function App() {
  return (
    <>
      <Navbar />
      <div className="main container">
        <Contact />
        <Caraousel />
        <Contact2 />
      </div>
      <div className="feedback container">
        <p>Please share your feedback and other queries</p>
        <a href="/">Google form link</a>
      </div>
    </>
  );
}

export default App;
