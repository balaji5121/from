import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://apis.ccbp.in/covid19-state-wise-data";

export const getChartData = createAsyncThunk("chartsData", async () => {
  const options = {
    method: "GET"
  };
  const res = await fetch(url, options);
  return res.json();
});

const chartsDataSlice = createSlice({
  name: "chartsData",
  initialState: {
    chartsList: []
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.fulfilled, (state, action) => {
        state.chartsList = action.payload;
      })
      .addCase(getChartData.pending, (state, action) => {
        // console.log(action.payload);
      })
      .addCase(getChartData.rejected, (state, action) => {
        // console.log(action.payload);
      });
  }
});

export default chartsDataSlice;
