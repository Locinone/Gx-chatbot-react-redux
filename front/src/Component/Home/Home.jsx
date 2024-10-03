import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isConnected, disconnected, login} from "../../Redux/userSlice";
import {useNavigate} from "react-router-dom";

function Home() {

  const dispatch = useDispatch();

  return (
    <>
      <div>Home</div>
      <button onClick={() => dispatch(disconnected())}>Déconnexion</button>
    </>

  )
}

export default Home;