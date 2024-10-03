import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {decrement, increment, login, register} from '../../Redux/userSlice';
import {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {ThemeProvider} from "../../Context/ThemeContext/ThemeProvider";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

function App() {


	return (
    <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoutes/>}>>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
	);

}

export default App;
