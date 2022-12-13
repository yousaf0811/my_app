import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import StudentLogin from './components/students/Student_login';
import StudentSignUp from './components/students/Student_signUp';
import StudentEdit from './components/students/StudentEdit';
import StudentQuery from './components/students/StudentQuery';
import TeacherLogin from './components/teacher/TeacherLogin';
import TeacherSignup from './components/teacher/TeacherSignup';
import TeacherEdit from './components/teacher/TeacherEdit';
import TeacherQuery from './components/teacher/TeacherQuery';
import StudentAccount from './components/students/StudentAccount';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/studentlogin" element={<StudentLogin/> } />
      <Route path="/studentsignup" element={<StudentSignUp/> } />
      <Route path="/studentaccount" element={<StudentAccount/> } />
      <Route path="/studentEdit" element={<StudentEdit/> } />
      <Route path="/studentquery" element={<StudentQuery/> } />
      <Route path="/teacherlogin" element={<TeacherLogin/> } />
      <Route path="/teachersignup" element={<TeacherSignup/> } />
      <Route path="/teacherEdit" element={<TeacherEdit/> } />
      <Route path="/teacherquery" element={<TeacherQuery/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
