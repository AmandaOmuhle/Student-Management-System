import React from "react";

function StudentList({ students }) {
  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>{s.name}</li>
      ))}
    </ul>
  );
}

export default StudentList;
