import axios from "axios";
import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/students");
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm setStudents={setStudents} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
