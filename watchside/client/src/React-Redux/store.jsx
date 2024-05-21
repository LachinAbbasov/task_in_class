
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './basketSlice';
import WatchSlice from './WatchSlice';


const  store = configureStore({
    reducer:{
        basket:basketSlice,
      watches: WatchSlice
    }
})

 
export default store
