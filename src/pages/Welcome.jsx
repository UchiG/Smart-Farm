// import SmileyOneIcon from '../assets/svg/smileyOneIcon.svg?react';
// import SmileyTwoIcon from '../assets/svg/smileyTwoIcon.svg?react';
// import SmileyThreeIcon from '../assets/svg/smileyThreeIcon.svg?react';
import { imageOverlay } from "leaflet";
import { WelcomeAlmostThere } from "../components/WelcomeAlmostThere";
import { WelcomeCompleted } from "../components/WelcomeCompleted";
import { WelcomeGetStarted } from "../components/WelcomeGetStarted";
import { WelcomeHeader } from "../components/WelcomeHeader";
import { useState } from "react";


const Welcome = () => {
  const [currentStep, setCurrentStep] = useState('getStarted');
  const handleNext = () => {
    if (currentStep === 'getStarted') {
      setCurrentStep('almostThere');
    } else if (currentStep === 'almostThere') {
      setCurrentStep('completed');
    }
  }

  const handleBack = () => {
    if (currentStep === 'almostThere') {
      setCurrentStep('getStarted');
    } else if (currentStep === 'completed') {
      setCurrentStep('almostThere');
    }
  }
  
  const [userFormData, setUserFormData] = useState({

  })

  const [farmFormData, setFarmFormData] = useState({
    farmName: '',
    address: '',
    country: '',
    district: '',
    city: '',
  });
  
 
  return (
   <div className="welcomePageParent">
    <WelcomeHeader />
    {currentStep === 'getStarted' && <WelcomeGetStarted handleNext={handleNext}   setFarmFormData={setFarmFormData} />}
    {currentStep === 'almostThere' && <WelcomeAlmostThere handleNext={handleNext} handleBack={handleBack} setUserFormData={setUserFormData} />}
    {currentStep === 'completed' && <WelcomeCompleted handleBack={handleBack} setUserFormData={setUserFormData} />}



    {/* <WelcomeGetStarted /> */}
    {/* <WelcomeAlmostThere /> */}
    {/* <WelcomeCompleted /> */}
   </div>
    
   
  );
}

export default Welcome;

