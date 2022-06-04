import {createAsyncThunk} from "@reduxjs/toolkit";


export const getCuisine = createAsyncThunk("data", async(arg, {
    rejectWithValue
}) => {
    try {
        const {data} = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=african&number=6");
    return data;
    } catch (error) {
       rejectWithValue(error.response.data);
    }
});