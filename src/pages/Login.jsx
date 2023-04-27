import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <img className="absolute left-5 top-3" src="images/logo.svg" alt="" />
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
              id="matricule"
              type="text"
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
              id="password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#6CB92E] w-[100%] text-white font-bold py-2 px-4 rounded-lg focus:outline-none "
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
