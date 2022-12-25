import { baseAxios } from "./../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface Like {
  id: number;
}
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  timeStamp: Date;
  likes: Like[];
}
interface DetailState {
  data:null | Product;
  isLoading: boolean;
}
const initialState: DetailState = {
data: null,
  isLoading: false,
};
export const productThunk = createAsyncThunk("productThunk",async ({ token, productId }: { token: string | null; productId: string|undefined|string[] }) => {
        console.log("thunk",productId);
        
      const resp = await axios.get(`https://assignment-api.piton.com.tr/api/v1/product/get/${productId}`, {
        headers: {
          "access-token": token,
        },
        
      })
  console.log("thunk",resp.data);
  
    return resp.data.product
    }
   
  );

const productDetail = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(productThunk.pending,(state)=>{
        state.isLoading=true
        state.data=null
    })
    builder.addCase(productThunk.fulfilled,(state,actions)=>{
        state.isLoading=false,
        state.data=actions.payload
    })
    builder.addCase(productThunk.rejected,(state,actions)=>{
      console.log(actions.error.message);
      
    })
},
});


export default productDetail.reducer;
