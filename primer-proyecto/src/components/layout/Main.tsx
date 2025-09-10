import { Route, Routes } from "react-router-dom";
import Contacto from "../page/ContactMe";
import Home from "../page/Home";
import Skills from "../page/Skills";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<h1>404 - No existe pagina</h1>} />
      </Routes>
    </>
  );
};

export default Main;
