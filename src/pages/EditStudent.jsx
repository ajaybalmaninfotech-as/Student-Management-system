import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StudentForm from "../components/StudentForm";
import { useStudents } from "../context/StudentContext";

const EditStudent = () => {
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
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
          minHeight: "80vh",
        }}
      >
        <div style={{ marginBottom: "25px" }}>
          <h1>Edit Student</h1>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Update the student information and click the button below to save
            the changes.
          </p>
        </div>

        <StudentForm
          initialData={student}
          isEdit={true}
        />
      </main>

      <Footer />
    </>
  );
};

export default EditStudent;