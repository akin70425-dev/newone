import { createSlice, current } from "@reduxjs/toolkit";





const dataslice=createSlice(
    {
        name:"user",
        initialState:{users:[],password:"",number:"",password1:"",numberlast:"",email:"",tem:""},
        reducers:{
            setuser:(state,action)=>{
                let same=state.users.find((data)=>{
                  return  data.number==state.number
                })
                if(!same&&state.password!==""&&state.number!==""){
                    state.users= [...state.users,{id:state.users.length+1,number:state.number,password:state.password}]
                }
                state.number=""
                state.password=""
                state.password1=""
                },
            setpassword:(state,action)=>{state.password=action.payload},
            setpassword1:(state,action)=>{state.password1=action.payload},

            setnumber:(state,action)=>{state.tem=state.number=action.payload
            },
            setemail:(state,action)=>{state.email=action.payload},
            reset:(state,action)=>{
                state.tem=""
                state.email=""
                state.password1=""
            },
            resetemailonly:(state)=>{
                state.password1=""
            },
            resetfull:(state)=>{
                state.email=""
            }
    }
}
)
export default dataslice.reducer;
export const {setuser,setpassword,setnumber,reset,setpassword1,setemail,resetemailonly,resetfull}=dataslice.actions;