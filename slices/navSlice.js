import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navSlice = createSlice({
  name: "navigations",
  initialState: [],
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//selectors
export const selectOrigin = (state) => state.navigations.origin;
export const selectDestination = (state) => state.navigations.destination;
export const selectTravelTimeInformation = (state) =>
  state.navigations.travelTimeInformation;

export default navSlice.reducer;
