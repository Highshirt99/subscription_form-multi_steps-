import React from "react";
import Addons from "../components/Addons";
import Finish from "../components/Finish";
import PersonalInfo from "../components/PersonalInfo";
import Plans from "../components/Plans";
import SidebarDesktop from "../components/SidebarDesktop";
import SidebarMobile from "../components/SidebarMobile";
import Thanks from "../components/Thanks";
import { useSelector } from "react-redux";

const View = () => {

  const currentStep = useSelector(state => state.gameData.currentStep)

  return (
    <div
      className="view"
    >
      <div>
        <SidebarMobile />
        <SidebarDesktop />
      </div>
      <div className="card">
       {currentStep === 1 && <PersonalInfo />} 
       { currentStep === 2 && <Plans/>}
   {  currentStep === 3 &&  <Addons />}
       { currentStep === 4 && <Finish/>}
        {currentStep === 5 && <Thanks/>}
      </div> 
    </div>
  );
};

export default View;
