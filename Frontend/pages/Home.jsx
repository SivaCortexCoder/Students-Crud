import React, { useContext, useEffect, useState } from 'react'
import Table from '../src/components/Table'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { studentContextApi } from '../src/context/StudentContext'

const Home = () => {
  const { studentsData, setStudentsData } = useContext(studentContextApi)
  const navigate = useNavigate()
  const[isloading,setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://students-crud-lozx.onrender.com/students')
      .then((res) => {
        setStudentsData(res.data)
      })
      .catch((err) => console.log(err))
      .finally(()=>{
        setIsLoading(false)
      })
  }, [])

  const deleteStudent = (index) => {
    const selectedStudent = studentsData[index]
    const selectedStudentId = selectedStudent._id

    axios.delete(`https://students-crud-lozx.onrender.com/${selectedStudentId}`)
      .then((res) => {
        console.log(res.data.message);
        const newList = [...studentsData];
        newList.splice(index, 1);
        setStudentsData(newList);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Students Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your student records</p>
          </div>
          <button 
            onClick={() => navigate('/create')} 
            className="cursor-pointer inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 
                       text-white font-semibold rounded-lg transition-colors duration-200 
                       focus:outline-none focus:ring-4 focus:ring-green-200 shadow-lg
                       w-full sm:w-auto justify-center"
          >
         
            + Add Student
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Table studentsData={studentsData} deleteStudent={deleteStudent} isloading={isloading} />
        </div>
      </div>
    </div>
  )
}

export default Home