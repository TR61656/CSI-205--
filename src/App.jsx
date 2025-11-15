import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Animation from "./pages/Animation";
import ComponentPage from "./pages/ComponentPage";
import TodoTable from "./pages/TodoTable";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Login from "./pages/Login"; //  

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/component" element={<ComponentPage />} />
        <Route path="/todotable" element={<TodoTable />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}



