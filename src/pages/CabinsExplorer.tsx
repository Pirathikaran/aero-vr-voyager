
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PanoramaViewer from "@/components/PanoramaViewer";
import VRModeButton from "@/components/VRModeButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CabinsExplorer = () => {
  const [selectedAircraft, setSelectedAircraft] = useState("b777");
  
  const handleDownloadClick = () => {
    toast.success("Downloading cabin model for offline VR viewing");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-airline-blue mb-4">Cabin Explorer</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore different aircraft cabins in immersive virtual reality. Choose your aircraft type and cabin class below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card 
              className={`cursor-pointer transition-all duration-300 ${selectedAircraft === "b777" ? "border-airline-blue shadow-lg" : "hover:shadow-md"}`}
              onClick={() => setSelectedAircraft("b777")}
            >
              <CardHeader>
                <CardTitle>Boeing 777-300ER</CardTitle>
                <CardDescription>Wide-body long-haul aircraft</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://via.placeholder.com/300x200?text=Boeing+777" 
                  alt="Boeing 777" 
                  className="w-full h-40 object-cover rounded-md mb-4" 
                />
                <div className="flex justify-between text-sm">
                  <span>8 First Class</span>
                  <span>42 Business</span>
                  <span>304 Economy</span>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all duration-300 ${selectedAircraft === "a380" ? "border-airline-blue shadow-lg" : "hover:shadow-md"}`}
              onClick={() => setSelectedAircraft("a380")}
            >
              <CardHeader>
                <CardTitle>Airbus A380-800</CardTitle>
                <CardDescription>Double-deck wide-body aircraft</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://via.placeholder.com/300x200?text=Airbus+A380" 
                  alt="Airbus A380" 
                  className="w-full h-40 object-cover rounded-md mb-4" 
                />
                <div className="flex justify-between text-sm">
                  <span>14 First Class</span>
                  <span>76 Business</span>
                  <span>399 Economy</span>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all duration-300 ${selectedAircraft === "a350" ? "border-airline-blue shadow-lg" : "hover:shadow-md"}`}
              onClick={() => setSelectedAircraft("a350")}
            >
              <CardHeader>
                <CardTitle>Airbus A350-900</CardTitle>
                <CardDescription>Long-range wide-body aircraft</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://via.placeholder.com/300x200?text=Airbus+A350" 
                  alt="Airbus A350" 
                  className="w-full h-40 object-cover rounded-md mb-4" 
                />
                <div className="flex justify-between text-sm">
                  <span>No First Class</span>
                  <span>32 Business</span>
                  <span>267 Economy</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
            <Tabs defaultValue="business">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-airline-blue">
                  {selectedAircraft === "b777" && "Boeing 777-300ER"}
                  {selectedAircraft === "a380" && "Airbus A380-800"}
                  {selectedAircraft === "a350" && "Airbus A350-900"}
                </h2>
                <TabsList>
                  <TabsTrigger value="first" disabled={selectedAircraft === "a350"}>First Class</TabsTrigger>
                  <TabsTrigger value="business">Business Class</TabsTrigger>
                  <TabsTrigger value="economy">Economy Class</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="first">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <PanoramaViewer />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4">First Class Suite</h3>
                      <p className="text-gray-600 mb-4">
                        Experience ultimate luxury in our First Class suites with private doors, personal minibar, and 32" HD screens. Each suite converts to a fully-flat bed with premium bedding.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-gold rounded-full"></span>
                          <span>Private suite with sliding doors</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-gold rounded-full"></span>
                          <span>Personal minibar and wardrobe</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-gold rounded-full"></span>
                          <span>32" HD screen with over 1,500 entertainment options</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-gold rounded-full"></span>
                          <span>Fully-flat bed with premium bedding</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <VRModeButton />
                      <Button onClick={handleDownloadClick} variant="outline" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download for VR Headset
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="business">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <PanoramaViewer />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Business Class</h3>
                      <p className="text-gray-600 mb-4">
                        Our Business Class offers direct aisle access from every seat, with privacy panels and fully-flat beds. Enjoy gourmet dining and premium entertainment on your personal 18" screen.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-blue rounded-full"></span>
                          <span>Direct aisle access from every seat</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-blue rounded-full"></span>
                          <span>Fully-flat bed with adjustable privacy panels</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-blue rounded-full"></span>
                          <span>18" HD touchscreen with noise-cancelling headphones</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-blue rounded-full"></span>
                          <span>Multiple storage compartments and power outlets</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <VRModeButton />
                      <Button onClick={handleDownloadClick} variant="outline" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download for VR Headset
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="economy">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <PanoramaViewer />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Economy Class</h3>
                      <p className="text-gray-600 mb-4">
                        Our Economy Class offers exceptional comfort with ergonomic seating, adjustable headrests, and generous legroom. Each seat features a personal 11.6" HD touchscreen.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-lightBlue rounded-full"></span>
                          <span>Ergonomic seat design with adjustable headrest</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-lightBlue rounded-full"></span>
                          <span>11.6" HD touchscreen with USB charging</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-lightBlue rounded-full"></span>
                          <span>Generous 32-34" seat pitch (varies by aircraft)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 bg-airline-lightBlue rounded-full"></span>
                          <span>Individual air vents and reading lights</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <VRModeButton />
                      <Button onClick={handleDownloadClick} variant="outline" className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download for VR Headset
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CabinsExplorer;
