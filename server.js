const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentsDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define schema + model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const Student = mongoose.model("Student", studentSchema);

// -------------------- CRUD ROUTES --------------------

// CREATE - Add new student
app.post("/students", async (req, res) => {
  console.log("Received POST /students with body:", req.body);
  const student = new Student({ name: req.body.name });
  await student.save();
  console.log("Saved student:", student);
  res.json(student);
});


// READ - Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// UPDATE - Edit student by ID
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json(student);
  } catch (err) {
    console.error(" Error updating student:", err);
    res.status(500).json({ error: "Failed to update student" });
  }
});

// DELETE - Remove student by ID
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    console.error(" Error deleting student:", err);
    res.status(500).json({ error: "Failed to delete student" });
  }
});

// -------------------- SERVER --------------------
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
