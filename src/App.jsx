import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Create from "./components/Create";
import Catalog from "./components/Catalog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create" element={<Create />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
