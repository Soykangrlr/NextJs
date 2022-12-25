import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useEffect} from 'react'
import Product_ly from '../components/layouts/product_ly'
import Loading from '../components/ui/loading'
import ProductCard from '../components/ui/productCard'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { productAll } from '../store/slice/productSlice'


export default function Home() {
 const user= useAppSelector(state=>state.userSlice)
 const product=useAppSelector(state=>state.productSlice)
 const dispatch=useAppDispatch()
 const router=useRouter()
 useEffect(()=>{
  if(!user.token){
  if(localStorage.getItem("registered")){
    router.push("/login")
  }else 
  {
    router.push("/register")
  }}
 },[user])
  useEffect(() => {
   dispatch(productAll( user.token))
   
  }, [])
  
  return (
    
    <>
    <Head>
      <title>Home Page</title>
    </Head>
     <Product_ly>
       {product.isloading || product.likeLoading &&  <Loading/> } 
       <div className="container mx-auto flex justify-center flex-wrap gap-12 my-14">
   {product.data.map(item=>(
    <div>
    <ProductCard key={item.id} id={item.id} image={item.image} name={item.name} likes={item.likes} price={item.price}/>
    </div>
   ))}
   </div>
     </Product_ly>
    </>
  )
}
