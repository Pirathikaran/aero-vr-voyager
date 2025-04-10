
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Aircraft3DModel from "@/components/Aircraft3DModel";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Globe, Headphones, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-airline-blue">
                  Experience Your Flight <span className="text-airline-lightBlue">Before You Fly</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Explore aircraft cabins in immersive virtual reality. See exactly what your seat view will look like before you book.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/cabins" className="vr-button">
                    <Plane className="h-5 w-5" />
                    Explore Cabins
                  </Link>
                  <Link to="/seats" className="bg-white text-airline-blue border-2 border-airline-blue font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-airline-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <Search className="h-5 w-5" />
                    Find Your Seat
                  </Link>
                </div>
              </div>
              <div className="lg:mt-0 mt-8 animate-float">
                <Aircraft3DModel />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-airline-blue to-airline-lightBlue text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Discover the AeroVR Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                <div className="bg-white/20 h-14 w-14 rounded-full flex items-center justify-center mb-6">
                  <Plane className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cabin Explorer</h3>
                <p className="text-blue-100">
                  Take a virtual tour of different aircraft cabins. Explore first class, business, and economy sections in immersive VR.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                <div className="bg-white/20 h-14 w-14 rounded-full flex items-center justify-center mb-6">
                  <Headphones className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Seat Viewer</h3>
                <p className="text-blue-100">
                  Check your exact seat view before booking. Ensure you get the perfect seat for your journey with our 360° seat views.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                <div className="bg-white/20 h-14 w-14 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">VR Technology</h3>
                <p className="text-blue-100">
                  Experience our cabins using the latest VR technology. Works with popular VR headsets or directly in your browser.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-br from-airline-blue/5 to-airline-lightBlue/10 p-12 rounded-2xl border border-blue-100 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-airline-blue">Ready to Experience Your Flight?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Try our VR cabin and seat viewer now and make informed decisions about your next flight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/cabins" className="vr-button">
                    <Plane className="h-5 w-5" />
                    Explore Cabins
                  </Link>
                  <Link to="/seats" className="bg-white text-airline-blue border-2 border-airline-blue font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-airline-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <Search className="h-5 w-5" />
                    Find Your Seat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
