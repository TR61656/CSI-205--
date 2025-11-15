import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const count = useSelector((state) => state.cart.items.length);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

const linkStyle = (isActive, activeColor, baseColor, hoverColor) =>
  `px-4 py-2 rounded-lg font-semibold transition relative ${
    isActive
      ? `${activeColor} text-blue-600 shadow` // ตัวหนังสือสีฟ้า
      : `${baseColor} text-blue-600 hover:${hoverColor}` // ตัวหนังสือสีฟ้า
  }`;


  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white p-4 flex flex-wrap justify-center items-center gap-3 shadow-md">
      {isLoggedIn ? (
        <>
          {/* กลุ่มเมนูหลัก */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              linkStyle(isActive, "bg-blue-600", "bg-blue-400", "bg-blue-500")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              linkStyle(isActive, "bg-green-600", "bg-green-400", "bg-green-500")
            }
          >
            Calculator
          </NavLink>

          <NavLink
            to="/animation"
            className={({ isActive }) =>
              linkStyle(
                isActive,
                "bg-purple-600",
                "bg-purple-400",
                "bg-purple-500"
              )
            }
          >
            Animation
          </NavLink>

         <NavLink
  to="/component" // ต้องตรงกับ Route
  className={({ isActive }) =>
    linkStyle(isActive, "bg-pink-600", "bg-pink-400", "bg-pink-500")
  }
>
  Component
</NavLink>

          <NavLink
            to="/todotable"
            className={({ isActive }) =>
              linkStyle(
                isActive,
                "bg-yellow-600",
                "bg-yellow-400",
                "bg-yellow-500"
              )
            }
          >
            TodoTable
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              linkStyle(isActive, "bg-cyan-600", "bg-cyan-400", "bg-cyan-500")
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/carts"
            className={({ isActive }) =>
              linkStyle(isActive, "bg-orange-600", "bg-orange-400", "bg-orange-500")
            }
          >
            Carts
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs px-1 rounded-full">
                {count}
              </span>
            )}
          </NavLink>

          {/* ปุ่ม Logout */}
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {/* ปุ่ม Login */}
          <button
            onClick={handleLogin}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;


