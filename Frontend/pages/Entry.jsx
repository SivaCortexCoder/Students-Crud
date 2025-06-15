import React from 'react';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="w-full max-w-xl">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Student Information System
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
              Organizing student data with full CRUD functionality
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/home')}
              className="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg 
                         hover:bg-red-500 hover:border-red-500 hover:text-white 
                         transition-all duration-300 transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-red-200 cursor-pointer"
            >
              View Students
            </button>
            <button 
              onClick={() => navigate('/create')}
              className="w-full py-3 px-6 bg-indigo-500 text-white font-semibold rounded-lg 
                         hover:bg-indigo-600 transition-all duration-300 transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-indigo-200 shadow-lg cursor-pointer"
            >
              Add Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;