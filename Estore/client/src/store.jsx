import {configureStore} from '@reduxjs/toolkit'
import EstoreSlice from './Redux/EstoreSlice'


const store =configureStore({
    reducer:{
    estore:EstoreSlice
    }
})

export default store