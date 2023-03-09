import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { finishUp, goBack } from "../redux/gameSlice";


function Buttons({ handleNext }) {
  const dispatch = useDispatch()

  const currentStep = useSelector((state) => state.gameData.currentStep);
  return (
    <div
      className="absolute top-[110%] lg:top-[90%] lg:w-[85%]  lg:right-6 left-0 right-0 flex justify-between items-center
     font-bold "
    >
      {currentStep > 1  && (
        <button className="text-coolGray w-[100px] cursor-pointer hover:text-marineBlue"
        onClick={() => dispatch(goBack())}>
          Go Back
        </button>
      )}
      {currentStep < 4 && (
        <button
          onClick={handleNext}
          className="outline-none border-none bg-marineBlue text-White p-2 w-[100px] rounded-[5px] cursor-pointer "
        >
          Next Step
        </button>
      )}
      {currentStep === 4 && (
        <button className="outline-none border-none bg-purplishBlue text-White cursor-pointer p-2 w-[120px] rounded-[5px]"
        onClick={() => dispatch(finishUp())}>
          Confirm
        </button>
      )}
    </div>
  );
}

export default Buttons;
