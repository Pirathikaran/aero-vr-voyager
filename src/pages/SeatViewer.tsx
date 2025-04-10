
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CabinMap from "@/components/CabinMap";
import PanoramaViewer from "@/components/PanoramaViewer";
import VRModeButton from "@/components/VRModeButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SeatViewer = () => {
  const [aircraft, setAircraft] = useState("b777");
  const [viewMode, setViewMode] = useState("window");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-airline-blue mb-4">Seat Viewer</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore what you'll see from your seat with our immersive VR seat viewer. Choose your seat from the cabin map below.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Aircraft</label>
                  <Select value={aircraft} onValueChange={setAircraft}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Aircraft" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="b777">Boeing 777-300ER</SelectItem>
                      <SelectItem value="a380">Airbus A380-800</SelectItem>
                      <SelectItem value="a350">Airbus A350-900</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Flight Details</label>
                  <div className="text-airline-blue font-semibold">
                    {aircraft === "b777" && "AV101: New York (JFK) to London (LHR)"}
                    {aircraft === "a380" && "AV202: Dubai (DXB) to Sydney (SYD)"}
                    {aircraft === "a350" && "AV303: Singapore (SIN) to Tokyo (HND)"}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <CabinMap />
              </div>
              
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-airline-blue">Seat 14A View</h2>
                      <Tabs value={viewMode} onValueChange={setViewMode}>
                        <TabsList>
                          <TabsTrigger value="window">Window View</TabsTrigger>
                          <TabsTrigger value="front">Front View</TabsTrigger>
                          <TabsTrigger value="overhead">Overhead View</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    
                    <div className="mb-6">
                      <PanoramaViewer />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Seat Details</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Class:</span>
                            <span className="font-medium">Economy</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Seat Type:</span>
                            <span className="font-medium">Window</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Pitch:</span>
                            <span className="font-medium">32 inches</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Width:</span>
                            <span className="font-medium">18 inches</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Recline:</span>
                            <span className="font-medium">5 inches</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Features</h3>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                            <span>USB Power</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                            <span>AC Power</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                            <span>Wi-Fi</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                            <span>No Additional Legroom</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                            <span>HD Touchscreen</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2">Recommendations</h3>
                        <div className="flex flex-col h-full">
                          <p className="text-sm mb-4">
                            Good window seat with standard legroom. Wing view might obstruct ground visibility during takeoff/landing.
                          </p>
                          <div className="mt-auto">
                            <VRModeButton />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SeatViewer;
