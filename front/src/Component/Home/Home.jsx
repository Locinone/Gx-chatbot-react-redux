import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isConnected, disconnected, login} from "../../Redux/userSlice";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../Context/ThemeContext/ThemeProvider";

function Home() {

  const dispatch = useDispatch();
  let navigate = useNavigate()
  const {connected} = useSelector(state => state.user);
  const {changeTheme} = useContext(ThemeContext);


  useEffect(() => {
    if (connected === false) {
      navigate('/login');
    }
  }, [connected]);

  return (
    <>
      <div>Home</div>
      <button onClick={()=>changeTheme()} >Change mode</button>
      <button onClick={() => dispatch(disconnected())}>Déconnexion</button>
    </>

  )
}

export default Home;