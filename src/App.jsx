import { Route, Routes } from "react-router-dom";
import Students from "./pages/Student";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/edit-student/:id" element={<EditStudent />} />
      <Route path="/student/:id" element={<StudentDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
