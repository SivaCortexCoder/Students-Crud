import React, { createContext, useState } from "react";
import axios from "axios";

export const studentContextApi = createContext();

const StudentContext = ({ children }) => {
  const [studentsData, setStudentsData] = useState([]);
  const [student, setStudent] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    const selectedUser = studentsData[index];
    setStudent({
      name: selectedUser.name,
      age: selectedUser.age,
      email: selectedUser.email,
    });
    setEditingIndex(index);
  };

  const updateStudent = () => {
    const selectedUser = studentsData[editingIndex];
    const selectedStudentId = selectedUser._id;

    return axios
      .put(`http://localhost:3000/${selectedStudentId}`, student)
      .then((res) => {
        console.log(res.data.message);

        // const newList = [...studentsData];
        // newList[editingIndex] = { ...student, _id: selectedStudentId };
        // setStudentsData(newList);

        // Reset form
        setStudent({ name: "", age: "", email: "" });
        setEditingIndex(null);

        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const addStudent = async () => {
    try {
      const res = await axios.post("http://localhost:3000/students", student);
      console.log(res.data);

      setStudentsData((prev) => [...prev, res.data]);

      setStudent({ name: "", age: "", email: "" });
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  console.log(editingIndex);

  return (
    <studentContextApi.Provider
      value={{
        studentsData,
        setStudentsData,
        student,
        setStudent,
        handleEdit,
        updateStudent,
        addStudent,
        editingIndex,
      }}
    >
      {children}
    </studentContextApi.Provider>
  );
};

export default StudentContext;
