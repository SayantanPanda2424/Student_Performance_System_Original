import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import AIRecommendation from './components/AIRecommendation';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  // Function to add students
  const addStudent = (student) => {
    setStudents([...students, { ...student, enrollmentNumber: students.length + 1 }]);
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Student Management System</h1>

        {/* Show Add Student Form and Student List only on Home Page */}
        <Routes>
          <Route path="/" element={
            <>
              <AddStudent addStudent={addStudent} />
              <StudentList students={students} />
            </>
          } />
          <Route path="/ai-recommendation/:enrollmentNumber" element={<AIRecommendation students={students} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
