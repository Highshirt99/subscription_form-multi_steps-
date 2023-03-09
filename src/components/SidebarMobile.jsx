import React from "react";
import img from "../assets/images/bg-sidebar-mobile.svg";
import { useSelector } from "react-redux";

function SidebarMobile() {
  const currentStep = useSelector((state) => state.gameData.currentStep);
  const steps = [
    { title: "1", id: 1 },
    { title: "2", id: 2 },
    { title: "3", id: 3 },
    { title: "4", id: 4 },
  ];
  return (
    <div className="lg:hidden relative w-screen">
      <img width="100%" src={img} alt="" />
      <div className="flex justify-center items-center gap-6 p-4 absolute top-3 left-[50%] translate-x-[-50%]">
        {steps.map((step) => (
          <span
            key={step.id}
            className={`${
              currentStep === step.id ? "bg-magnolisa  text-marineBlue" : ""
            }
          border p-4 w-12 h-12 rounded-[50%] flex justify-center items-center text-White`}
          >
            {step.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SidebarMobile;
