import { useState } from "react";

import Register from "@/components/form/Register";
import Login from "@/components/form/Login";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
  };

  return (
    <div className="p-5 space-y-5 overflow-auto touch-pan-y">
      {isLoginForm ? (
        <div>
          <Login />
          <button
            onClick={toggleForm}
            className="flex justify-center font-normal text-base text-[#2B2B2B] bg-transparent hover:bg-transparent shadow-none mt-2 w-full"
          >
            Belum memiliki akun? Silakan klik disini!
          </button>
        </div>
      ) : (
        <div>
          <Register />
          <button
            onClick={toggleForm}
            className="flex justify-center font-normal text-base text-[#2B2B2B] bg-transparent hover:bg-transparent shadow-none mt-2 w-full"
          >
            Sudah memiliki akun? Silakan klik disini!
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
