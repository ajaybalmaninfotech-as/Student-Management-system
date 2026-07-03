import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
    },
    {
      id: 2,
      title: "Students",
      path: "/students",
    },
    {
      id: 3,
      title: "Add Student",
      path: "/add-student",
    },
  ];

  const activeLink = {
    backgroundColor: "#2563eb",
    color: "#ffffff",
  };

  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        borderRight: "1px solid #e5e7eb",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          color: "#2563eb",
          textAlign: "center",
        }}
      >
        StudentMS
      </h2>

      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  display: "block",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "#1f2937",
                  fontWeight: "500",
                  transition: "0.3s",
                  ...(isActive ? activeLink : {}),
                })}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;