import { createSlice } from "@redux/toolkit";

const exampleSlice = createSlice({
    name: "example",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1},
        decrement: (state) => { state.value -= 1}
    }
});

export const { increment, decrement } = exampleSlice.action;
export default exampleSlice.reducer;