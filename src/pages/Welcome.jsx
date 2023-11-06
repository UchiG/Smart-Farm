// import SmileyOneIcon from '../assets/svg/smileyOneIcon.svg?react';
// import SmileyTwoIcon from '../assets/svg/smileyTwoIcon.svg?react';
// import SmileyThreeIcon from '../assets/svg/smileyThreeIcon.svg?react';
import { WelcomeGetStarted } from "../components/WelcomeGetStarted";
import { WelcomeHeader } from "../components/WelcomeHeader";

const Welcome = () => {
  return (
   <div className="welcomePageParent">
    <WelcomeHeader />
    <WelcomeGetStarted />
   </div>
    
   
  );
}

export default Welcome;

