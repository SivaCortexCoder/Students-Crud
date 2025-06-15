import React, { useContext } from "react";
import { studentContextApi } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

const Table = ({ studentsData, deleteStudent }) => {
  const { handleEdit } = useContext(studentContextApi)
  const navigate = useNavigate()

  if (!studentsData || studentsData.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Students Found</h3>
        <p className="text-gray-500">Start by adding your first student record.</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                S.No
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {studentsData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {item.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => { handleEdit(index); navigate('/create') }}
                      className="cursor-pointer inline-flex items-center p-2 text-blue-500 hover:text-blue-700 
                                 hover:bg-blue-50 rounded-lg transition-colors duration-200
                                 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      title="Edit Student"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => deleteStudent(index)}
                      className="cursor-pointer inline-flex items-center p-2 text-red-500 hover:text-red-700 
                                 hover:bg-red-50 rounded-lg transition-colors duration-200
                                 focus:outline-none focus:ring-2 focus:ring-red-200"
                      title="Delete Student"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  
      <div className="md:hidden space-y-4 p-4">
        {studentsData.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                <div className="text-sm text-gray-500 mt-1">Student #{index + 1}</div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button
                  onClick={() => { handleEdit(index); navigate('/create') }}
                  className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 
                             rounded-lg transition-colors duration-200"
                  title="Edit Student"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button
                  onClick={() => deleteStudent(index)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             rounded-lg transition-colors duration-200"
                  title="Delete Student"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500 font-medium">Age:</span>
                <span className="ml-2 text-gray-900">{item.age}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500 font-medium">Email:</span>
                <span className="ml-2 text-gray-900 break-all">{item.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;