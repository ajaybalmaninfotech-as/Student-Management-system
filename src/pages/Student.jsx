import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StudentTable from "../components/StudentTable";
import { useStudents } from "../context/StudentContext";

const Students = () => {
  const {
    searchTerm,
    setSearchTerm,
    filterCourse,
    setFilterCourse,
    sortBy,
    setSortBy,
    students,
  } = useStudents();

  // Get unique course names
  const courses = ["All", ...new Set(students.map((student) => student.course))];

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
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          <div>
            <h1>Students</h1>
            <p>Total Students: {students.length}</p>
          </div>

          <Link to="/add-student">
            <button
              style={{
                padding: "12px 18px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              + Add Student
            </button>
          </Link>
        </div>

        {/* Search Filter Sort */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Search */}
          <div>
            <label>Search Student</label>

            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          </div>

          {/* Filter */}
          <div>
            <label>Filter By Course</label>

            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              {courses.map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label>Sort Students</label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              <option value="">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="percentage">Highest Percentage</option>
              <option value="attendance">Highest Attendance</option>
            </select>
          </div>
        </div>

        {/* Student Table */}
        <StudentTable />
      </main>

      <Footer />
    </>
  );
};

export default Students;