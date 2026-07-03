import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useStudents } from "../context/StudentContext";

const StudentDetails = () => {
  const { id } = useParams();
  const { getStudent } = useStudents();

  const student = getStudent(id);

  if (!student) {
    return <Navigate to="/students" replace />;
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "0 20px",
          minHeight: "80vh",
        }}
      >
        <h1
          style={{
            marginBottom: "25px",
          }}
        >
          Student Details
        </h1>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <Info title="Student ID" value={student.id} />
            <Info title="Name" value={student.name} />
            <Info title="Age" value={student.age} />
            <Info title="Gender" value={student.gender} />
            <Info title="Course" value={student.course} />
            <Info title="Year" value={student.year} />
            <Info title="Email" value={student.email} />
            <Info title="Phone" value={student.phone} />
            <Info title="City" value={student.city} />
            <Info title="State" value={student.state} />
            <Info
              title="Percentage"
              value={`${student.percentage}%`}
            />
            <Info
              title="Attendance"
              value={`${student.attendance}%`}
            />

            <Info
              title="Status"
              value={student.status}
              color={
                student.status === "Active"
                  ? "green"
                  : "crimson"
              }
            />
          </div>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Link to="/students">
              <button
                style={{
                  padding: "12px 20px",
                  border: "none",
                  background: "#6b7280",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                ← Back
              </button>
            </Link>

            <Link to={`/edit-student/${student.id}`}>
              <button
                style={{
                  padding: "12px 20px",
                  border: "none",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Edit Student
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

const Info = ({ title, value, color = "#111827" }) => {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        background: "#f9fafb",
      }}
    >
      <h4
        style={{
          marginBottom: "8px",
          color: "#6b7280",
        }}
      >
        {title}
      </h4>

      <p
        style={{
          margin: 0,
          fontWeight: "600",
          color,
          fontSize: "17px",
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default StudentDetails;