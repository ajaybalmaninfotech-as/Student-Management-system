import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useStudents } from "../context/StudentContext";

const Dashboard = () => {
  const { students } = useStudents();

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const averagePercentage =
    totalStudents > 0
      ? (
          students.reduce(
            (total, student) => total + Number(student.percentage),
            0
          ) / totalStudents
        ).toFixed(1)
      : 0;

  const averageAttendance =
    totalStudents > 0
      ? (
          students.reduce(
            (total, student) => total + Number(student.attendance),
            0
          ) / totalStudents
        ).toFixed(1)
      : 0;

  const recentStudents = [...students].slice(-5).reverse();

  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: "35px" }}>
          <h1>Student Management Dashboard</h1>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Monitor students, attendance, performance and manage records from
            one place.
          </p>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <Card
            title="Total Students"
            value={totalStudents}
            color="#2563eb"
          />

          <Card
            title="Active Students"
            value={activeStudents}
            color="#16a34a"
          />

          <Card
            title="Inactive Students"
            value={inactiveStudents}
            color="#dc2626"
          />

          <Card
            title="Average Percentage"
            value={`${averagePercentage}%`}
            color="#ea580c"
          />

          <Card
            title="Average Attendance"
            value={`${averageAttendance}%`}
            color="#7c3aed"
          />
        </div>

        {/* Quick Actions */}
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>Quick Actions</h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "15px",
            }}
          >
            <Link to="/students">
              <button style={primaryButton}>
                View Students
              </button>
            </Link>

            <Link to="/add-student">
              <button style={successButton}>
                Add Student
              </button>
            </Link>
          </div>
        </div>

        {/* Recent Students */}
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <h2>Recently Added Students</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {recentStudents.map((student) => (
              <div
                key={student.id}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                }}
              >
                <h3>{student.name}</h3>

                <p>
                  <strong>Course:</strong> {student.course}
                </p>

                <p>
                  <strong>Email:</strong> {student.email}
                </p>

                <p>
                  <strong>Attendance:</strong> {student.attendance}%
                </p>

                <p
                  style={{
                    color:
                      student.status === "Active"
                        ? "#16a34a"
                        : "#dc2626",
                    fontWeight: "bold",
                  }}
                >
                  {student.status}
                </p>

                <Link to={`/student/${student.id}`}>
                  <button style={primaryButton}>
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

const Card = ({ title, value, color }) => (
  <div
    style={{
      background: "#fff",
      padding: "25px",
      borderRadius: "10px",
      borderLeft: `6px solid ${color}`,
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    }}
  >
    <h3
      style={{
        color: "#6b7280",
        marginBottom: "12px",
      }}
    >
      {title}
    </h3>

    <h1
      style={{
        color,
        margin: 0,
      }}
    >
      {value}
    </h1>
  </div>
);

const primaryButton = {
  padding: "10px 18px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
};

const successButton = {
  padding: "10px 18px",
  background: "#16a34a",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Dashboard;