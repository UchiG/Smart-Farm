// import SmileyOneIcon from '../assets/svg/smileyOneIcon.svg?react';
// import SmileyTwoIcon from '../assets/svg/smileyTwoIcon.svg?react';
// import SmileyThreeIcon from '../assets/svg/smileyThreeIcon.svg?react';
import WelcomePicIcon from '../assets/svg/welcomePicIcon.svg?react';
import FarmHorizonIcon from '../assets/svg/farmHorizonIcon.svg?react';

const Welcome = () => {
  return (
    <div className="relative">
      <h1 className="">Welcome to Smart Farm</h1>
      <h4 className="">Let's get started. Tell us about your farm and preferences</h4>

      <div className="flex">
      <div>
          {/* <SmileyOneIcon /> */}
        </div>
        <div>
          {/* <SmileyTwoIcon /> */}
        </div>
        <div>
          {/* <SmileyThreeIcon /> */}
        </div>
      </div>
      
      <div className="absolute top-0 left-0">
        <FarmHorizonIcon className="z-10" />
        <WelcomePicIcon className="z-1" />
      </div>
    </div>
  )
}

export default Welcome;

