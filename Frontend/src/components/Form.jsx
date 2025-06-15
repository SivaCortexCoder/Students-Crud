import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { studentContextApi } from "../context/StudentContext";

const Form = () => {
  const { 
    student, 
    setStudent, 
    updateStudent, 
    addStudent, 
    editingIndex 
  } = useContext(studentContextApi);

  const navigate = useNavigate();

  const handleFormData = (key, value) => {
    setStudent((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  
  console.log(student);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingIndex !== null) {
        await updateStudent();
      } else {
        await addStudent();
      }
      navigate("/home");
    } catch (error) {
      console.error("Error submitting form:", error);
      
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">
          {editingIndex !== null ? "Edit Student" : "Add Student"}
        </h2>
        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <input
            onChange={(e) => {
              handleFormData(e.target.name, e.target.value);
            }}
            value={student.name}
            name="name"
            className="w-full outline-none bg-transparent py-2.5"
            type="text"
            placeholder="Student Name"
            required
          />
        </div>
        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <input
            onChange={(e) => {
              handleFormData(e.target.name, e.target.value);
            }}
            value={student.age}
            name="age"
            className="w-full outline-none bg-transparent py-2.5"
            type="number"
            placeholder="Student Age"
            required
          />
        </div>
        <div className="flex items-center mt-2 mb-8 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <input
            onChange={(e) => {
              handleFormData(e.target.name, e.target.value);
            }}
            value={student.email}
            name="email"
            className="w-full outline-none bg-transparent py-2.5"
            type="email"
            placeholder="Student Email"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium cursor-pointer"
        >
          {editingIndex !== null ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default Form;