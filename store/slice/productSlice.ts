import { baseAxios } from './../api';
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


 interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    timeStamp: Date;
    likes: number;
}
interface productState{
    data:Product[] | [],
    isloading:boolean,
    likeLoading:boolean
}

const initialState:productState={
    data:[],
    isloading:false,
    likeLoading:false
}
export const productAll=createAsyncThunk("productAll",async(token:string|null)=>{
    const resp= await baseAxios.get(`/api/v1/product/all`,{
        headers:{
            'access-token':token
        }
    })
    return resp.data.products
})
export const productLike=createAsyncThunk("productLike",async({token,productId}:{token:string|null,productId:number})=>{
   await baseAxios.post(`/api/v1/product/like`,{
    "productId":productId
 },{ headers:{
    'access-token':token
}

})})
export const productUnLike=createAsyncThunk("productUnLike",async({token,productId}:{token:string|null,productId:number})=>{
   const resp= await baseAxios.post(`/api/v1/product/unlike`,{
    "productId":productId
 },{ headers:{
    'access-token':token
}

})
console.log(resp.data);
})
const productAllSlice=createSlice({
    name:"productAll",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(productAll.pending,(state)=>{
            state.isloading=true
        })
        builder.addCase(productAll.fulfilled,(state,actions)=>{
            state.isloading=false,
            state.data=actions.payload
        })
        builder.addCase(productUnLike.pending,(state)=>{
            state.likeLoading=true
        })
        builder.addCase(productUnLike.fulfilled,(state)=>{
            state.likeLoading=false
        })
        builder.addCase(productLike.pending,(state)=>{
            state.likeLoading=true
        })
        builder.addCase(productLike.fulfilled,(state)=>{
            state.likeLoading=false
        })

    },
})

export default productAllSlice.reducer