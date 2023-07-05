import React, { useState } from "react";
import App from "../App";
import AppServices from "../services/AppServices";
import { useGlobalState } from "..";

const Login = () => {
  const [data, setData] = useState({})
  const [is_admin, setIsAdmin] = useGlobalState('is_admin')
  const handleSubmit = () => {
  
    AppServices.post('/auth', {
      action: 0,
      data: data
    }).then((response) => {
      localStorage.setItem("token", response.token)
      localStorage.setItem("is_admin", response.is_admin)
      setIsAdmin(response.is_admin)
      window.location = '/'
    })
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <img className="absolute left-5 top-3" src="/images/logo.svg" alt="" />
      <div className="w-full max-w-[501px]">
        <h1 className="text-center text-2xl font-bold mb-7">Pointage OCP</h1>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="matricule"
              
            >
              Matricule
            </label>
            <input
              className="appearance-none bg-gray-100 rounded-xl w-full py-3 px-3 text-black leading-tight focus:outline-none "
              name="matricule"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
              
            >
              Mot de passe
            </label>
            <input
              className="appearance-none bg-gray-100 rounded-xl w-full py-3 px-3 text-black leading-tight focus:outline-none "
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#6CB92E] w-[100%] text-white font-bold py-2 px-4 rounded-lg focus:outline-none "
              type="button"
              onClick={handleSubmit}
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
