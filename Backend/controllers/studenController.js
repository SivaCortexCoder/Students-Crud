import student from "../models/studenModel.js";

export const allStudents = async (req, res) => {
  try {
    const students = await student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const newStudent = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newStudent = new student({ name, age, email });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await student.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res
      .status(200)
      .json({ message: "Student deleted successfully", data: deletedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
