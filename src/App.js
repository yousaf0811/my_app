import './App.css';
import StudentLogin from './components/students/Student_login';
import StudentSignUp from './components/students/Student_signUp';
import StudentEdit from './components/students/StudentEdit';
import StudentQuery from './components/students/StudentQuery';
import TeacherLogin from './components/teacher/TeacherLogin';
import TeacherSignup from './components/teacher/TeacherSignup';
import TeacherEdit from './components/teacher/TeacherEdit';
import TeacherQuery from './components/teacher/TeacherQuery';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Home/>
      <StudentLogin />
      <StudentSignUp />
      <StudentEdit />
      <StudentQuery />
      <TeacherLogin />
      <TeacherSignup />
      <TeacherEdit />
      <TeacherQuery/>
    </div>
  );
}

export default App;
