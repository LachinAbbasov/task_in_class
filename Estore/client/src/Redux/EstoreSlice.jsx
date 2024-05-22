import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    clothes: [],
    oneData: {},
    loading: false,
    error: null
}
export const getAllData = createAsyncThunk('getAllData', async () => {
    const response = await axios.get('http://localhost:2121/api/estore')
    return response.data.data
})

export const getOneData = createAsyncThunk('getOneData', async (id) => {
    const response = await axios.get(`http://localhost:2121/api/estore/${id}`)
    return response.data.data
})

export const getDeleteData = createAsyncThunk('getDeleteData', async (id) => {
    const response = await axios.delete(`http://localhost:2121/api/estore/${id}`)
    return response.data.data
})

export const getPostData = createAsyncThunk('getPostData', async (newData) => {
    const response = await axios.post('http://localhost:2121/api/estore', newData)
    return response.data.data
})

const EstoreSlice = createSlice({
    name: "clothes",
    initialState,
    reducer: {
        //search and filter
    },
    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state, action) => {
            state.loading = true;
        }).addCase(getAllData.fulfilled,(state,action)=>{
            state.loading = false;
            state.clothes = action.payload
        }).addCase(getAllData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

        builder.addCase(getOneData.pending, (state, action) => {
            state.loading = true;
        }).addCase(getOneData.fulfilled,(state,action)=>{
            state.loading = false;
            state.oneData = action.payload
        }).addCase(getOneData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

        builder.addCase(getDeleteData.pending, (state, action) => {
            state.loading = true;
        }).addCase(getDeleteData.fulfilled,(state,action)=>{
            state.loading = false;
            state.clothes = [...state.clothes.filter(x=>x._id!=action.payload._id)]
        }).addCase(getDeleteData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

        builder.addCase(getPostData.pending, (state, action) => {
            state.loading = true;
        }).addCase(getPostData.fulfilled,(state,action)=>{
            state.loading = false;
            state.clothes.push(action.payload)
        }).addCase(getPostData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })

    }
})

export const {} = EstoreSlice.actions;

export default EstoreSlice.reducer