import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StudentForm from "../components/StudentForm";

const AddStudent = () => {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "80vh",
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <h1
            style={{
              marginBottom: "8px",
            }}
          >
            Add New Student
          </h1>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Fill in the student details below to add a new record.
          </p>
        </div>

        <StudentForm />
      </main>

      <Footer />
    </>
  );
};

export default AddStudent;