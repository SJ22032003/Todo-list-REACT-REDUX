import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import {useSelector} from 'react-redux'

function App() {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  return (
    <div className="App" data-theme={myTheme}>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
