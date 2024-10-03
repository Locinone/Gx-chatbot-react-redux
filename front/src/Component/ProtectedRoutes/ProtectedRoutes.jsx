import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";

const ProtectedRoutes = () => {

  const {connected} = useSelector(state => state.user);
  let navigate = useNavigate()

  if (connected === false) {
    navigate('/login');
  }

  useEffect(() => {
    if (connected === false) {
      navigate('/login');
    }
  }, [connected]);


  return (
    <Outlet/>
  );
};

export default ProtectedRoutes;