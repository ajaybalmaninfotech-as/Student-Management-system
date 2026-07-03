import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

const StudentTable = () => {
  const { filteredStudents, deleteStudent } = useStudents();

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`
    );

    if (confirmDelete) {
      deleteStudent(id);
    }
  };

  if (filteredStudents.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        No Students Found
      </div>
    );
  }

  return (
    <div
      style={{
        overflowX: "auto",
        marginTop: "30px",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Year</th>
            <th style={thStyle}>Percentage</th>
            <th style={thStyle}>Attendance</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td style={tdStyle}>{student.id}</td>
              <td style={tdStyle}>{student.name}</td>
              <td style={tdStyle}>{student.age}</td>
              <td style={tdStyle}>{student.gender}</td>
              <td style={tdStyle}>{student.course}</td>
              <td style={tdStyle}>{student.year}</td>
              <td style={tdStyle}>{student.percentage}%</td>
              <td style={tdStyle}>{student.attendance}%</td>
              <td
                style={{
                  ...tdStyle,
                  color:
                    student.status === "Active" ? "green" : "crimson",
                  fontWeight: "bold",
                }}
              >
                {student.status}
              </td>

              <td style={tdStyle}>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link to={`/student/${student.id}`}>
                    <button style={viewBtn}>View</button>
                  </Link>

                  <Link to={`/edit-student/${student.id}`}>
                    <button style={editBtn}>Edit</button>
                  </Link>

                  <button
                    style={deleteBtn}
                    onClick={() =>
                      handleDelete(student.id, student.name)
                    }
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "14px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const viewBtn = {
  padding: "8px 14px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const editBtn = {
  padding: "8px 14px",
  background: "#16a34a",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "8px 14px",
  background: "#dc2626",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default StudentTable;