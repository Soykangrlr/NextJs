import { configureStore,compose} from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import userSlice from './slice/userSlice';
export const store = configureStore({
  reducer: {
   userSlice
  }
  
})

const makeStore=()=>store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<AppStore>(makeStore);
