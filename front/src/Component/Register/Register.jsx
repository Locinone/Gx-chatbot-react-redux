import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";  // Je réutilise le CSS de login pour la présentation
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/userSlice";

const Register = () => {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  const { status, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  async function handleRegister(e) {
    e.preventDefault();
    let body = {
      "email": email,
      "password": password,
      "nickname": email.split('@')[0], // Utilise la partie avant @ de l'email comme pseudo

    };
    await dispatch(register(body));
  }

  // Redirige vers la page de connexion
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div id={"login"}> {/* Réutilise l'ID login pour garder la même présentation */}
      <div id={"containerLogin"}>
        <h1> Inscription</h1>
        <form onSubmit={(e) => handleRegister(e)}>
          <div className={"inputLogin"}>
            <label>Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className={"inputLogin"}>
            <label>Mot de passe:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <button>Inscription</button>
        </form>

        {/* Ajout d'un bouton pour revenir à la page de connexion */}
        <button onClick={goToLogin} style={{ marginTop: '20px' }}>
          Connexion
        </button>
      </div>
    </div>
  );
};

export default Register;
