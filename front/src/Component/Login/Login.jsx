import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/userSlice";

const Login = () => {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  const { status, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  async function connection(e) {
    e.preventDefault();
    let body = {
      "email": email,
      "password": password,
    };
    await dispatch(login(body));
  }

  useEffect(() => {
    if (status === 'success') {
      navigate('/');
    } else if (status === 'failed') {
      console.log(error);
    }
  }, [status]);

  // Fonction pour naviguer vers la page register
  const goToRegister = () => {
    navigate('/register'); // Redirige vers la page d'inscription
  };

  return (
    <div id={"login"}>
      <div id={"containerLogin"}>
        <h1> Bienvenue sur notre chatbot</h1>
        <form onSubmit={(e) => connection(e)}>
          <div className={"inputLogin"}>
            <label>Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className={"inputLogin"}>
            <label>Mot de passe:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button>Connexion</button>
        </form>

        {/* Ajout d'un bouton pour aller sur la page d'inscription */}
        <button onClick={goToRegister} style={{ marginTop: '20px' }}>
          Inscription
        </button>
      </div>
    </div>
  )
};

export default Login;
