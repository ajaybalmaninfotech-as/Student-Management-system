import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

const StudentForm = ({ initialData = null, isEdit = false }) => {
  const navigate = useNavigate();
  const { addStudent, updateStudent } = useStudents();

  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      age: "",
      gender: "Male",
      course: "",
      year: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      percentage: "",
      attendance: "",
      status: "Active",
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Student name is required.";
    }

    if (!formData.age || formData.age < 16 || formData.age > 40) {
      newErrors.age = "Age should be between 16 and 40.";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required.";
    }

    if (!formData.year.trim()) {
      newErrors.year = "Year is required.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }

    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must contain 10 digits.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }

    if (
      formData.percentage === "" ||
      formData.percentage < 0 ||
      formData.percentage > 100
    ) {
      newErrors.percentage = "Percentage must be between 0 and 100.";
    }

    if (
      formData.attendance === "" ||
      formData.attendance < 0 ||
      formData.attendance > 100
    ) {
      newErrors.attendance = "Attendance must be between 0 and 100.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (isEdit) {
      updateStudent(formData);
    } else {
      addStudent(formData);
    }

    navigate("/students");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        {isEdit ? "Edit Student" : "Add Student"}
      </h2>

      <div className="form-grid">
        <Input
          label="Student Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
        />

        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={["Male", "Female", "Other"]}
        />

        <Input
          label="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          error={errors.course}
        />

        <Input
          label="Year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          error={errors.year}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
        />

        <Input
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
        />

        <Input
          label="Percentage"
          name="percentage"
          type="number"
          value={formData.percentage}
          onChange={handleChange}
          error={errors.percentage}
        />

        <Input
          label="Attendance"
          name="attendance"
          type="number"
          value={formData.attendance}
          onChange={handleChange}
          error={errors.attendance}
        />

        <Select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          options={["Active", "Inactive"]}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          marginTop: "25px",
          padding: "14px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {isEdit ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) => (
  <div style={{ marginBottom: "18px" }}>
    <label>{label}</label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "6px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    />

    {error && (
      <small style={{ color: "red" }}>{error}</small>
    )}
  </div>
);

const Select = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div style={{ marginBottom: "18px" }}>
    <label>{label}</label>

    <select
      name={name}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "6px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default StudentForm;