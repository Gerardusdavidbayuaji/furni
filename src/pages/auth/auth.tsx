import { useState } from "react";

import Register from "@/components/form/Register";
import Login from "@/components/form/Login";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleAuthForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div className="p-5 space-y-5 overflow-auto touch-pan-y">
      {isLoginForm ? (
        <div>
          <Login />
          <button
            onClick={toggleAuthForm}
            className="text-[#2B2B2B] dark:text-[#FAFAFA] bg-transparent hover:bg-transparent flex justify-center font-normal text-xs md:text-sm lg:text-base shadow-none mt-2 w-full"
          >
            If you don't have an account yet, please click here.
          </button>
        </div>
      ) : (
        <div>
          <Register />
          <button
            onClick={toggleAuthForm}
            className="text-[#2B2B2B] dark:text-[#FAFAFA] bg-transparent hover:bg-transparent flex justify-center font-normal text-xs md:text-sm lg:text-base shadow-none mt-2 w-full"
          >
            If you already have an account, please click here.
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
