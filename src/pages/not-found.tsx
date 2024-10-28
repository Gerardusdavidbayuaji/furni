import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link to="/">
        <Button className="rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 w-auto">
          Go back home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
