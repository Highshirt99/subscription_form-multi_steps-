import React from "react";
import img from "../assets/images/bg-sidebar-desktop.svg";
import { useSelector } from "react-redux";

function SidebarDesktop() {
  const currentStep = useSelector((state) => state.gameData.currentStep);

  const steps = [
    { no: "1", id: 1, name: "STEP 1", title: "YOUR INFO" },
    { no: "2", id: 2, name: "STEP 2", title: "SELECT PLAN" },
    { no: "3", id: 3, name: "STEP 3", title: "ADD-ONS" },
    { no: "4", id: 4, name: "STEP 4", title: "SUMMARY" },
  ];
  return (
    <div className="hidden lg:block p-6 relative">
      <div className="mt-3">
        <img src={img} alt="" />
      </div>
      <div className="absolute top-[10%] left-[30%] translate-x-[-30%] text-center">
        {steps.map((step) => (
          <div key={step.id} className="flex">
            <div className="flex flex-col justify-center items-center gap-10 p-4">
              <span
                className={`${
                  currentStep === step.id ? "bg-magnolisa  text-marineBlue" : ""
                }
              border p-4 w-12 h-12 rounded-[50%] flex justify-center items-center text-White`}
              >
                {step.no}
              </span>
            </div>

            <div className="my-4 text-left text-[16px]">
              <p className="text-coolGray">
                {step.name} <br />{" "}
                <span className="text-White">{step.title}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarDesktop;
