import { createSlice } from "@reduxjs/toolkit";

const dataslice=createSlice(
    {
        name:"user",
        initialState:{users:null,emailcopy:""},
        reducers:{
           setuser:(state,action)=>{
            state.users=action.payload
           },
          setemailcopy:(state,action)=>{
            state.emailcopy=action.payload
          },
          removeemailcopy:(state)=>{
            state.emailcopy=""
          }
    }
}
)
export const {setuser,setemailcopy,removeemailcopy}=dataslice.actions;
export default dataslice.reducer;