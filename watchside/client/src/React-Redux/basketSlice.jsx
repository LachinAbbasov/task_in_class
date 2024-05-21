import { createSlice } from "@reduxjs/toolkit";


const initialState= {
  items:[]
}

const basketSlice =createSlice({
    name:'basket',
    initialState,
    reducer:{
        AddItem:(state,action) =>{
            const item = state.items.find(item => item.id ===action.payload.id)
            if(item){
                item.quentity +=1;
            }else{
                state.item.push({...action.payload,quantity:1})
            }
        },
        RemoveItem:(state,action) =>{
            state.items = state.items.filter(item => item.id === action.payload.id)
        },

        increaseItem:(state,action) =>{
            const item = state.items.find(item => item.id ===action.payload.id)
            if(item){
                item.quentity +=1;
            }else{
                state.item.push({...action.payload,quantity:1})
            }
        },
        decreaseItem:(state,action) =>{
            const item = state.items.find(item => item.id ===action.payload.id)
            if(item && item.quentity >1){
                item.quentity -=1;
            }else if(item && item.quentity === 1 ){
                state.item.filter(item =>item.id ===action.payload.id)
            }
        },
        clearItem:state =>{
            state.items= [];
        }

    }
})

export const {AddItem, RemoveItem ,increaseItem,decreaseItem,clearItem } =basketSlice.actions;
export default basketSlice.reducer;