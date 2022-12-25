import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { baseAxios } from '../api'


interface userState{
    token:string | null,
    isloading:boolean,
}
const initialState:userState={
    token: typeof window !== "undefined" ?localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")||""):null:null,
    isloading:false
}
export const registerUser=createAsyncThunk("registeUser",async({name,email,password}:{name:string,email:string,password:string})=>{
    const resp=await baseAxios.post("/api/v1/user/register",{
        
            "name":name,
            "email":email,
            "password":password
       
    })
    console.log(resp);
    
    return resp.data
})
export const loginUser=createAsyncThunk("loginUser",async({email,password}:{email:string,password:string})=>{
    const resp=await baseAxios.post("/api/v1/user/login",{ 
            "email":email,
            "password":password
    })
    console.log("login",resp.data.token);
    
    return resp.data
})
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:(state)=>{
            state.token=null
            localStorage.removeItem("token")
        }
    },
    extraReducers(builder) {
        builder.addCase(registerUser.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(registerUser.fulfilled,(state,actions)=>{
            state.token=actions.payload.token;
            state.isloading=false
            localStorage.setItem("token",JSON.stringify(actions.payload.token))
            localStorage.setItem("registered",JSON.stringify(true))
          
        })
        builder.addCase(loginUser.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(loginUser.fulfilled,(state,actions)=>{
            state.token=actions.payload.token;
            state.isloading=false
            localStorage.setItem("token",JSON.stringify(actions.payload.token))
        })
    },
    
})
export const {logout}=userSlice.actions
export default userSlice.reducer