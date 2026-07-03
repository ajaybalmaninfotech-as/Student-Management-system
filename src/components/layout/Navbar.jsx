import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "#1f2937",
    fontWeight: isActive ? "600" : "500",
    textDecoration: "none",
  });

  return (
    <header
      style={{
        width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "700",
            color: "#2563eb",
          }}
        >
          StudentMS
        </Link>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "24px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink to="/" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/students" style={activeStyle}>
              Students
            </NavLink>
          </li>

          <li>
            <NavLink to="/add-student" style={activeStyle}>
              Add Student
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;