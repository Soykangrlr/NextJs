import { configureStore,ThunkAction, Action} from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import userSlice from './slice/userSlice';
import productSlice from './slice/productSlice';
import productDetail from './slice/detailSlice';

export const store = configureStore({
  reducer: {
   userSlice,
   productSlice,
   productDetail
  }
  
})

const makeStore=()=>store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<AppStore>(makeStore);
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;