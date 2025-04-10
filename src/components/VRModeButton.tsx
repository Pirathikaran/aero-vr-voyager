
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const VRModeButton = () => {
  const [isVRMode, setIsVRMode] = useState(false);
  
  const toggleVRMode = () => {
    if (isVRMode) {
      setIsVRMode(false);
      toast.info("Exited VR mode");
    } else {
      // Check if WebXR is supported
      if ("xr" in navigator) {
        setIsVRMode(true);
        toast.success("Entered VR mode. Put on your headset!");
      } else {
        toast.error("WebXR is not supported in your browser");
      }
    }
  };
  
  return (
    <Button 
      onClick={toggleVRMode}
      className={`vr-button ${isVRMode ? 'bg-airline-red' : ''}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h.01M7 12h.01M11 12h.01M15 12h.01M19 12h.01"></path>
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
      </svg>
      {isVRMode ? "Exit VR Mode" : "Enter VR Mode"}
    </Button>
  );
};

export default VRModeButton;
