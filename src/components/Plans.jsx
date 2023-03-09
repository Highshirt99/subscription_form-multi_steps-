import React, { useState, useEffect } from "react";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  setPlans,
  setPlanType,
  setSelectedPlan,
  removeSelectedPlan,
  setAddons,
  removeSelectedAddons
} from "../redux/gameSlice";
import Buttons from "./Buttons";

function Plans() {
  const dispatch = useDispatch();
  const planType = useSelector((state) => state.gameData.planType);
  const selectedPlan = useSelector((state) => state.gameData.selectedPlan);
  const [subPlan, setSubPlan] = useState("monthly");
  

  const togglePlan = () => {
    subPlan === "monthly" ? setSubPlan("yearly") : setSubPlan("monthly");
    dispatch(setPlanType(subPlan));
    dispatch(removeSelectedPlan())
    dispatch(setAddons())
    dispatch(removeSelectedAddons())
  };

  useEffect(() => {
    if (planType) {
      setSubPlan(planType);
    }

    dispatch(setPlans(plans));
  });
  const plans = [
    {
      id: 0,
      title: "Arcade",
      image: arcadeImg,
      price: subPlan === "yearly" ? 90 : 9,
    },
    {
      id: 1,
      title: "Advanced",
      image: advancedImg,
      price: subPlan === "yearly" ? 120 : 12,
    },
    {
      id: 2,
      title: "Pro",
      image: proImg,
      price: subPlan === "yearly" ? 150 : 15,
    },
  ];

  const handleNext = () => {
    if (selectedPlan[0]) {
       dispatch(nextStep());
      

    } else {
      alert("Please, select a plan.");
    }
  };
  return (
    <div className="flex flex-col gap-[20px] lg:gap-[30px]">
      <div className="tracking-wide">
        <h1 className="cardH1">Select Your Plans</h1>
        <p className="text-coolGray mt-4">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-12 gap-3  ">
        {plans.map((plan) => (
          <div
            onClick={() => dispatch(setSelectedPlan(plan.id))}
            key={plan.id}
            className={`${
              selectedPlan[0]?.id === plan.id
                ? "bg-magnolisa border border-purplishBlue"
                : ""
            } flex lg:flex-col items-center lg:items-start gap-5 lg:gap-6 bg-White p-3 
            :p-6 w-[100%] lg:w-[120px] h-[100px] lg:h-auto shadow-md border border-lightGray
            rounded-[8px] cursor-pointer`}
          >
            <img
              src={plan.image}
              className="w-[20%] lg:w-[30%] sm:w-[50px] md:w-[50px]"
              alt=""
            />
            <div className="text-[12px]">
              <h3 className="text-marineBlue font-[900]">{plan.title}</h3>
              <span className="text-coolGray">
                ${plan.price}/{subPlan === "monthly" ? "mo" : "yr"}
              </span>
              {subPlan === "yearly" && (
                <p className="text-marineBlue">2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        className="lg:mt-10 flex justify-center items-center lg:gap-12 gap-6 bg-magnolisa rounded-md w-[100%]
      
      lg:w-[65%]
     
       "
      >
        <p className={`${subPlan === "yearly" ? "text-coolGray" : ""}`}>
          Monthly
        </p>
        {subPlan === "monthly" ? (
          <MdToggleOff
            className="text-blue-700 text-[3rem] cursor-pointer"
            onClick={togglePlan}

          />
        ) : (
          <MdToggleOn
            className="text-blue-700 text-[3rem] cursor-pointer"
            onClick={togglePlan}
          />
        )}
        <p className={`${subPlan === "monthly" ? "text-coolGray" : ""}`}>
          Yearly
        </p>
      </div>
      <Buttons handleNext={handleNext} />
    </div>
  );
}

export default Plans;
