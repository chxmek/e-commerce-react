import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import HomeAdmin from "./components/pages/admin/Home";
import HomeUser from "./components/pages/user/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/index" element={<HomeAdmin />} />
        <Route path="/user/index" element={<HomeUser />} />
      </Routes>
    </div>
  );
}

export default App;
