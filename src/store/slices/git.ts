import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contribution {
  value: number;
}

interface GitState {
  contributions: Contribution[];
}

export const gitSlice = createSlice({
  name: "counter",
  initialState: {
    contributions: [{value: 10}]
  } as GitState,
  reducers: {
    setContributions: (state, action: PayloadAction<Contribution[]>) => {
      return {
        ...state,
        contributions: action.payload
      };
    }
  }
});



export const { setContributions } = gitSlice.actions;
