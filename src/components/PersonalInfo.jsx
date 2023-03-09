import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import isEmail from "validator/lib/isEmail";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, setPersonalInfo } from "../redux/gameSlice";

function PersonalInfo() {
  const personalInfo = useSelector((state) => state.gameData.personalInfo);

  const [name, setName] = useState(personalInfo.name);
  const [email, setEmail] = useState(personalInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(personalInfo.phoneNumber);
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();


  const validate = () => {
    let error = {
      name: null,
      phoneNumber: null,
      email: null,
    };
    if (name.length === 0) {
      error.name = "Name cannot be empty!";
    }
    if (phoneNumber.length === 0) {
      error.phoneNumber = "Phone number cannot be empty!";
    } else if (phoneNumber.length < 11) {
      error.phoneNumber = "Phone number is not valid!";
    }

    if (email.length === 0) {
      error.email = "Email cannot be empty!";
    } else if (email && !isEmail(email)) {
      error.email = "Email is not valid!";
    }
    setErrors(error);

    if (!error.name && !error.email && !error.phoneNumber) {
      dispatch(setPersonalInfo({name, email, phoneNumber}));
      dispatch(nextStep());
    }
  };

  const handleNext = () => {
    validate();
  };

  return (
    <div className="lg:relative">
      <div className="flex flex-col gap-3 tracking-wide">
        <h1 className="cardH1">Personal Info</h1>
        <p className="text-coolGray">
          Please, provide your name, email address and phone number.
        </p>
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="name" className="text-marineBlue font-medium">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Aishat Akinyemi"
            value={name}
            className={`${errors.name ? "border-strawberryRed" : ""} input`}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-strawberryRed">{errors.name}</p>}
          <label htmlFor="name" className="text-marineBlue font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. akinyemiomolola99@gmail.com"
            value={email}
            className={`${errors.email ? "border-strawberryRed" : ""} input`}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-strawberryRed">{errors.email}</p>}
          <label htmlFor="phoneNumber" className="text-marineBlue font-medium">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="e.g. +234 81 324 246 57"
            value={phoneNumber}
            className={`${
              errors.phoneNumber ? "border-strawberryRed" : ""
            } input`}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="text-strawberryRed">{errors.phoneNumber}</p>
          )}
        </form>
      </div>
      <br />
      <br /> <br />
      <Buttons handleNext={handleNext} />
    </div>
  );
}

export default PersonalInfo;
