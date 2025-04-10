
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-airline-blue animate-float">
          <Plane className="h-20 w-20 mx-auto transform -rotate-45" />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-airline-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Looks like this flight path doesn't exist
        </p>
        <p className="text-gray-500 mb-8">
          The page you're looking for may have been moved or deleted.
        </p>
        <Link to="/">
          <Button className="vr-button">
            <Plane className="h-5 w-5 mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
