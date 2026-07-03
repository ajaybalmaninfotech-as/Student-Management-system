import { createContext, useContext, useEffect, useState } from "react";
import studentsData from "../data/student";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  // Load students from localStorage or default data
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem("students");

    if (storedStudents) {
      return JSON.parse(storedStudents);
    }

    return studentsData;
  });

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Filter
  const [filterCourse, setFilterCourse] = useState("All");

  // Sort
  const [sortBy, setSortBy] = useState("");

  // Save data in localStorage whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add Student
  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(),
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  // Update Student
  const updateStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  // Get Single Student
  const getStudent = (id) => {
    return students.find((student) => student.id === Number(id));
  };

  // Filter + Search + Sort
  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((student) => {
      if (filterCourse === "All") return true;

      return (
        student.course.toLowerCase() === filterCourse.toLowerCase()
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);

        case "percentage":
          return b.percentage - a.percentage;

        case "attendance":
          return b.attendance - a.attendance;

        default:
          return 0;
      }
    });

  return (
    <StudentContext.Provider
      value={{
        // State
        students,
        filteredStudents,

        // Search
        searchTerm,
        setSearchTerm,

        // Filter
        filterCourse,
        setFilterCourse,

        // Sort
        sortBy,
        setSortBy,

        // CRUD
        addStudent,
        deleteStudent,
        updateStudent,
        getStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

// Custom Hook
export const useStudents = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error(
      "useStudents must be used inside StudentProvider"
    );
  }

  return context;
};

export default StudentContext;