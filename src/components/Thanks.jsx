import React from "react";
import image from "../assets/images/icon-thank-you.svg";
import { useDispatch } from "react-redux";
import { goBack } from "../redux/gameSlice";

function Thanks() {
  const dispatch = useDispatch()
  return (
    <div className="text-center flex flex-col justify-center items-center
     gap-6 p-6 ">
      <div className="flex justify-center items-center">
        <img src={image} width="50px" alt="" />
      </div>
      <h1 className="cardH1">Thank you!</h1>
      <p className="text-coolGray">
        Thanks for your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at
        support@gaming.com
      </p>

      <button className="bg-purplishBlue p-2 rounded-md text-White cursor-pointer"
      onClick={() => dispatch(goBack())}
      >Go Back</button>
    </div>
  );
}

export default Thanks;
