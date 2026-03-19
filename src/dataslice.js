import { createSlice } from "@reduxjs/toolkit";

const dataslice=createSlice(
    {
        name:"user",
        initialState:{users:null},
        reducers:{
           setuser:(state,action)=>{
            state.users=action.payload
           }
          
    }
}
)
export const {setuser}=dataslice.actions;
export default dataslice.reducer;