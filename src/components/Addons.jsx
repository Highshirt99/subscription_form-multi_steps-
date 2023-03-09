import React, { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md";
import Buttons from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, setAddons, setSelectedAddons } from "../redux/gameSlice";
import { monthlyAddons } from './../addonsData';

function Addons() {
  const planType = useSelector((state) => state.gameData.planType);
  const selectedAddons = useSelector(
    (state) => state.gameData.selectedAddonsArr
  );
  const addons = useSelector((state) => state.gameData.addons);
  // const [addonsArr, setAddonsArr] = useState(monthlyAddons)

  
  const [subPlan, setSubPlan] = useState(planType);

  const dispatch = useDispatch();

  
  const showAddons = () => {
    return addons
  };

  useEffect(() => {
  showAddons()
   
  }, []);

  const handleNext = () => {
    if (selectedAddons.length > 0) {
      dispatch(nextStep());
    } else {
      alert("Kindly select add-on(s).");
    }
  };
  return (
    <div className="flex flex-col gap-[20px] lg:gap-[20px] ">
      <div className="tracking-wide">
        <h1 className="cardH1">Pick Add-ons</h1>
        <p className="text-coolGray mt-4">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      {addons.map((add_on) => (
        <div
          key={add_on.id}
          className={ `flex items-center  justify-between w-[100%] h-[80px] lg:w-[70%] cursor-pointer border 
            shadow-md p-3 rounded-md lg:mt-1 ${
            add_on.status === "active"
              ? "bg-magnolisa border border-purplishBlue"
              : ""
          }`}
          
          onClick={() => dispatch(setSelectedAddons(add_on))}
        >
          <div className="flex items-center gap-6">
            <div
              className={`${
                add_on.status === "active" ? "bg-blue-700" : ""
              } w-5 h-5 border border-coolGray rounded-md text-White flex justify-center items-center
    font-extrabold cursor-pointer`}
            >
              {add_on.status === "active" ? <MdCheck /> : null}
            </div>
            <div>
              <h3 className="text-marineBlue font-extrabold">{add_on.title}</h3>
              <p className="text-coolGray text-sm">{add_on.details}</p>
            </div>
          </div>

          <span className="text-purplishBlue text-sm">
            +${add_on.price}/ {subPlan === "yearly" ? "yr" : "mo"}
          </span>
        </div>
      ))}

      <Buttons handleNext={handleNext} />
    </div>
  );
}

export default Addons;
