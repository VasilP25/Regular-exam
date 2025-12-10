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
import Details from "./components/Details";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Mytrainings from "./components/Mytrainings";
import Search from "./components/Search";
import NotLoggedGuard from "./components/notLoggedGuard";
import LoggedGuard from "./components/LoggedGuard";
import Like from "./components/Like";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<NotLoggedGuard />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/catalog">
          <Route index element={<Catalog />} />
          <Route path="details/:_id" element={<Details />} />
          <Route element={<LoggedGuard />}>
            <Route path="details/:_id/delete" element={<Delete />} />
            <Route path="details/:_id/edit" element={<Edit />} />
          </Route>
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route element={<LoggedGuard />}>
          <Route path="create" element={<Create />} />
          <Route path="mytrainings" element={<Mytrainings />} />
          <Route path="/like/:id" element={<Like />} />
        </Route>
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
