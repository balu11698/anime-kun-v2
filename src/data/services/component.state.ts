import { createSlice } from "@reduxjs/toolkit";

interface ComponentsState {
  language: string;
}

const initialState: ComponentsState = {
  language: "en",
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

const { actions, reducer } = componentsSlice;

export const { setLanguage } = actions;

export default reducer;
