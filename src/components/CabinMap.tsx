
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type SeatClass = "economy" | "business" | "first";

interface Seat {
  id: string;
  row: number;
  column: string;
  class: SeatClass;
  occupied: boolean;
}

const CabinMap = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<SeatClass>("economy");
  
  // Create a grid of seats
  const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];
    
    // First class (rows 1-2)
    for (let row = 1; row <= 2; row++) {
      for (let col of ['A', 'D', 'G', 'K']) {
        seats.push({
          id: `${row}${col}`,
          row,
          column: col,
          class: 'first',
          occupied: Math.random() > 0.7
        });
      }
    }
    
    // Business class (rows 3-10)
    for (let row = 3; row <= 10; row++) {
      for (let col of ['A', 'C', 'D', 'G', 'H', 'K']) {
        seats.push({
          id: `${row}${col}`,
          row,
          column: col,
          class: 'business',
          occupied: Math.random() > 0.6
        });
      }
    }
    
    // Economy class (rows 11-30)
    for (let row = 11; row <= 30; row++) {
      for (let col of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K']) {
        seats.push({
          id: `${row}${col}`,
          row,
          column: col,
          class: 'economy',
          occupied: Math.random() > 0.5
        });
      }
    }
    
    return seats;
  };
  
  const seats = generateSeats();
  
  const getSeatsByClass = (seatClass: SeatClass) => {
    return seats.filter(seat => seat.class === seatClass);
  };
  
  const rows = Array.from(new Set(getSeatsByClass(selectedClass).map(seat => seat.row))).sort((a, b) => a - b);
  const columns = Array.from(new Set(getSeatsByClass(selectedClass).map(seat => seat.column))).sort();
  
  const handleSeatClick = (seatId: string) => {
    const seat = seats.find(s => s.id === seatId);
    if (seat?.occupied) {
      toast.error("This seat is already occupied");
      return;
    }
    setSelectedSeat(selectedSeat === seatId ? null : seatId);
    if (selectedSeat !== seatId) {
      toast.success(`Seat ${seatId} selected. View in VR now!`);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-airline-blue">Cabin Map</h2>
        <div className="flex space-x-2">
          <Button 
            variant={selectedClass === "first" ? "default" : "outline"}
            onClick={() => setSelectedClass("first")}
            className={selectedClass === "first" ? "bg-airline-gold text-black" : ""}
          >
            First
          </Button>
          <Button 
            variant={selectedClass === "business" ? "default" : "outline"}
            onClick={() => setSelectedClass("business")}
            className={selectedClass === "business" ? "bg-airline-blue" : ""}
          >
            Business
          </Button>
          <Button 
            variant={selectedClass === "economy" ? "default" : "outline"}
            onClick={() => setSelectedClass("economy")}
            className={selectedClass === "economy" ? "bg-airline-lightBlue" : ""}
          >
            Economy
          </Button>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <div className="w-full flex items-center justify-center mb-8">
          <div className="bg-gray-400 h-6 w-1/2 rounded-t-full"></div>
        </div>
        
        <div className="grid gap-y-2">
          {rows.map(row => (
            <div key={row} className="flex items-center">
              <div className="w-8 font-bold text-right mr-4">{row}</div>
              <div className="flex gap-1">
                {columns.map(column => {
                  const seatId = `${row}${column}`;
                  const seat = seats.find(s => s.id === seatId);
                  
                  if (!seat) return null;
                  
                  let seatColorClass = '';
                  if (seat.occupied) {
                    seatColorClass = 'bg-gray-400 text-white cursor-not-allowed';
                  } else if (selectedSeat === seatId) {
                    seatColorClass = 'bg-airline-gold text-black';
                  } else if (seat.class === 'first') {
                    seatColorClass = 'bg-white border-2 border-airline-gold hover:bg-airline-gold/20';
                  } else if (seat.class === 'business') {
                    seatColorClass = 'bg-white border-2 border-airline-blue hover:bg-airline-blue/20';
                  } else {
                    seatColorClass = 'bg-white border-2 border-airline-lightBlue hover:bg-airline-lightBlue/20';
                  }
                  
                  // Add aisles
                  let marginClass = '';
                  if (['C', 'G'].includes(column)) {
                    marginClass = 'mr-4';
                  }
                  
                  return (
                    <button
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      disabled={seat.occupied}
                      className={`w-8 h-8 flex items-center justify-center rounded ${seatColorClass} ${marginClass} transition-colors`}
                    >
                      {column}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border-2 border-airline-blue"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-airline-gold"></div>
            <span className="text-sm">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-400"></div>
            <span className="text-sm">Occupied</span>
          </div>
        </div>
      </div>
      
      {selectedSeat && (
        <div className="mt-6">
          <Button className="w-full vr-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="21.17" y1="8" x2="12" y2="8"></line>
              <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
              <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
            </svg>
            View Seat {selectedSeat} in VR
          </Button>
        </div>
      )}
    </div>
  );
};

export default CabinMap;
