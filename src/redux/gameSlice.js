import { createSlice } from "@reduxjs/toolkit";
import { monthlyAddons, yearlyAddons } from "./../addonsData";

const initialState = {
  currentStep: 1,
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  planType: "monthly",
  plans: "",
  selectedPlan: "",
  addons: monthlyAddons,
  selectedAddon: null,
  selectedAddonsArr: "",
};

export const gameSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setPlanType: (state, action) => {
      state.planType = action.payload === "monthly" ? "yearly" : "monthly";
    },
    nextStep: (state) => {
      if (state.currentStep < 4) {
        state.currentStep += 1;
      }
    },
    goBack: (state) => {
      if (state.currentStep >= 1) {
        state.currentStep -= 1;
      }
    },
    finishUp: (state) => {
      state.currentStep = 5;
    },
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = state.plans.filter(
        (plan) => plan.id === action.payload
      );
    },
    setAddons: (state) => {
      state.addons =
        state.planType === "monthly" ? monthlyAddons : yearlyAddons;
    },
    setSelectedAddons: (state, action) => {
      state.selectedAddon = state.addons.filter(
        (item) => item.id === action.payload.id
      );

      if (state.selectedAddon[0].status === "inactive") {
        state.selectedAddon[0].status = "active";
      } else if (state.selectedAddon[0].status === "active") {
        state.selectedAddon[0].status = "inactive";
      }

      state.selectedAddonsArr = state.addons.filter(
        (item) => item.status === "active"
      );
    },

    removeSelectedPlan: (state, action) => {
      state.selectedPlan = "";
    },
    removeSelectedAddons: (state) => {
      state.selectedAddonsArr = [];
    },
  },
});

export const {
  setPersonalInfo,
  nextStep,
  goBack,
  finishUp,
  setPlanType,
  setPlans,
  setSelectedPlan,
  setAddons,
  setSelectedAddons,
  removeSelectedPlan,
  removeSelectedAddons,
} = gameSlice.actions;

export default gameSlice.reducer;
