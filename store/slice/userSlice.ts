import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { postUser } from '../api'
interface User{
    token:string|undefined
}
interface userState{
    token:User | null,
    isloading:boolean,
}
const initialState:userState={
    token:null,
    isloading:false
}
export const registerUser=createAsyncThunk("registeUser",async({name,email,password}:{name:string,email:string,password:string})=>{
    const resp=await postUser.post("/api/v1/user/register",{
        
            "name":name,
            "email":email,
            "password":password
       
    })
    console.log(resp);
    
    return resp.data
})
export const loginUser=createAsyncThunk("loginUser",async({email,password}:{email:string,password:string})=>{
    const resp=await postUser.post("/api/v1/user/login",{ 
            "email":email,
            "password":password
    })
    console.log("login",resp.data.token);
    
    return resp.data
})
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(registerUser.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(registerUser.fulfilled,(state,actions)=>{
            state.token=actions.payload.token;
            state.isloading=false
        })
        builder.addCase(loginUser.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(loginUser.fulfilled,(state,actions)=>{
            state.token=actions.payload.token;
            state.isloading=false
        })
    },
    
})

export default userSlice.reducer