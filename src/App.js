import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PortFolio from "./components/PortFolio";
import Statistics from "./components/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={"/sudarshan1099/sudarshan1099.github.io/home"}
            ></Navigate>
          }
        ></Route>
        <Route
          path="/sudarshan1099/sudarshan1099.github.io/"
          element={<PortFolio></PortFolio>}
        >
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="skills" element={<Skills></Skills>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>
          <Route path="statistics" element={<Statistics></Statistics>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
