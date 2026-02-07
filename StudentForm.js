import React, { useState } from "react";

function StudentForm({ setStudents }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting student:", name);

  try {
    const res = await axios.post("http://localhost:5000/students", { name });
    console.log("Response from backend:", res.data);
    setStudents(prev => [...prev, res.data]);
    setName("");
  } catch (err) {
    console.error("Error adding student:", err);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter student name" 
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
