import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "120px",
              margin: 0,
              color: "#2563eb",
            }}
          >
            404
          </h1>

          <h2
            style={{
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            Page Not Found
          </h2>

          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            The page you are trying to access doesn't exist or may have been
            moved.
          </p>

          <Link to="/">
            <button
              style={{
                padding: "12px 24px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Go to Dashboard
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;