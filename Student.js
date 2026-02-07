const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, "Invalid email"] },
  course: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
