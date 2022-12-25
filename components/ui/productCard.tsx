import Link from 'next/link';
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react'
import { AiFillHeart } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from '../../store/hook';

import { productAll, productLike, productUnLike } from '../../store/slice/productSlice';

interface productCard{
    name: string;
    price: number;
    image: string;
    likes: number;
    id:number
}
function ProductCard(props:productCard) {
 
    const dispatch=useAppDispatch()
    const user =useAppSelector(state=>state.userSlice)
    const [uiLike,setUiLike]=useState(props.likes)
    
    const router=useRouter()
    
    console.log(uiLike==1);
    
    const handleLike=async()=>{
     
        if(uiLike){
          
            setUiLike(i=>i=0)
           await dispatch(productUnLike({token:user.token,productId:props.id}))

           console.log("like");
           
        }else{
          setUiLike(i=>i=1)
          
          await  dispatch(productLike({token:user.token,productId:props.id}))
          console.log("like");

        }
        await dispatch(productAll(user.token))
    } 
  return (
   
  <>
  {uiLike }
  {props.likes}
    <div  className="border hover:cursor-pointer max-w-[264px] p-8 rounded-2xl relative">
        <div className="shadow-book p-1">
          <img
            className="w-52 h-72"
            src={`https://assignment-api.piton.com.tr${props.image}`}
            alt=""
          />
        </div>
        <div onClick={()=>router.push(`productDetail/${props.id}`)} className="text-sm text-center mt-4 min-h-[60px] font-semibold">
          <p>
            {props.name}
          </p>
        </div>
        <div className="border-b mt-4 border-black"></div>
        <div className="text-[#0671e1] text-center font-bold mt-2">
          <p>{props.price}.00 tl</p>
        </div>
        <div  onClick={()=>{
     
     
        handleLike()}}
        className={`absolute top-3 right-3 hover:cursor-pointer ${uiLike?"text-red-600":"text-gray-400"}`}
        >
       <AiFillHeart  />
        </div>
      </div>
      </>
  )
}
export default ProductCard