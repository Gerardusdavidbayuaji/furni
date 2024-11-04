import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-2 justify-center items-center h-screen w-full">
      <p className="font-medium text-2xl">Oops, sorry it's under maintenance</p>
      <Button
        onClick={() => navigate("/")}
        className="rounded-lg bg-[#778F86] shadow-none hover:bg-[#778F86]/80"
      >
        Home
      </Button>
    </div>
  );
};

export default LoginPage;
