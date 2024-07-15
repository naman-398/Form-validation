import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import LogIn from './components/login/LogIn';
import ForgetPassword from './components/forgetPassword/ForgetPassword';

function App() {
  return (
    <Routes>
        <Route path="/" element={< LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
    </Routes>
  );
}

export default App;
