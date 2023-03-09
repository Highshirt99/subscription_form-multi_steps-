import React from "react";
import Buttons from "./Buttons";
import {useDispatch, useSelector } from "react-redux";
import { goBack } from "../redux/gameSlice";

function Finish() {
  const dispatch = useDispatch()
  const selectedPlan = useSelector((state) => state.gameData.selectedPlan);
  const planType = useSelector((state) => state.gameData.planType);
  const selectedAddons = useSelector(
    (state) => state.gameData.selectedAddonsArr
  );
  const prices = [];

  selectedAddons.forEach((item) => {
    prices.push(item.price);
  });

  const getTotalPrice = (total, num) => {
    return total + num;
  };
  const totalPrice = selectedPlan[0].price + prices.reduce(getTotalPrice, 0);

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[30px]">
      <div className="tracking-wide">
        <h1 className="cardH1">Finishing Up</h1>
        <p className="text-coolGray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-magnolisa w-[100%] lg:w-[80%] p-5 rounded-md h-auto">
        <div className="flex justify-between  py-3">
          <h3 className="text-marineBlue font-extrabold capitalize">
            {selectedPlan[0].title} ({planType}) <br />
            <a
              href="#"
              onClick={() => dispatch(goBack())}
              className="text-coolGray font-[500] text-sm hover:text-marineBlue cursor-pointer"
            >
              Change
            </a>
          </h3>
          <h3 className="text-marineBlue font-extrabold">
            ${selectedPlan[0].price}/{planType === "monthly" ? "mo" : "yr"}
          </h3>
        </div>

        <hr />

        {selectedAddons.map((item) => (
          <div className="flex justify-between items-center py-3" key={item.id}>
            <p className="text-coolGray">{item.title}</p>
            <span className="text-marineBlue">
              +${item.price}/{planType === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        ))}
      </div>
      <div
        className="flex justify-between items-center w-[100%]
        lg:w-[80%] px-5"
      >
        <p className="text-coolGray">
          Total (per {planType === "monthly" ? "month" : "year"} )
        </p>
        <h3 className="text-purplishBlue font-[900]">
          +${totalPrice}/{planType === "month" ? "mo" : "yr"}
        </h3>
      </div>

      <Buttons />
    </div>
  );
}

export default Finish;
