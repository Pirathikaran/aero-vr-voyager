
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <Plane className="h-8 w-8 text-airline-blue" />
          <span className="text-2xl font-bold bg-gradient-to-r from-airline-blue to-airline-lightBlue bg-clip-text text-transparent">
            AeroVR Voyager
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-airline-blue hover:text-airline-lightBlue transition-colors">
            Home
          </Link>
          <Link to="/cabins" className="text-airline-blue hover:text-airline-lightBlue transition-colors">
            Cabin Explorer
          </Link>
          <Link to="/seats" className="text-airline-blue hover:text-airline-lightBlue transition-colors">
            Seat Viewer
          </Link>
          <Button className="bg-airline-blue hover:bg-airline-lightBlue text-white">
            Book Now
          </Button>
        </div>
        
        <Button className="md:hidden" variant="outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
