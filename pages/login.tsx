import LoginRegister_ly from "../components/layouts/loginRegister_ly"
import {AiOutlineUser, AiOutlineMail,AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import {MdOutlinePassword}from "react-icons/md"
import Input from "../components/ui/input"
import {  useState,useEffect } from "react"

import { Formik } from 'formik'
import { loginValidation } from "../validationSchema"
import { useAppDispatch, useAppSelector } from "../store/hook"
import { loginUser } from "../store/slice/userSlice"
import Loading from "../components/ui/loading"
import { useRouter } from "next/router"
interface Values {
	
	email: string;
	password:string,
	
  }
function Login() {

	
	const [visible,setVisible]=useState(false)
	
    const router=useRouter()
	const dispatch=useAppDispatch()
	const user=useAppSelector(state=>state.userSlice)
	
	useEffect(()=>{
		if(user.token){
		
		  router.push("/")
		
		}
		
	   },[user])

	  const initialValues: Values = {
	
	  email: '',
	  password:"",
	 }
	 
	if(user.token){
        router.push("/")
    }
		
	
  return (
    <LoginRegister_ly>
        {user.isloading&& <Loading/>
}       
 { user.token!==null && !user.token &&  <span className="text-red-500 ">* Kullanıcı Adı veya Şifre yanlış</span>}
 <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again</h1>
	<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
		<Formik<Values>
         initialValues={initialValues}
         onSubmit={(values, actions) => {

           
		  
		   const {email,password}=values
           dispatch(loginUser({email,password}))
         }}
		 validationSchema={loginValidation}
		 validateOnChange={false}
		 validateOnBlur={false}
       >{(props)=>{{
		
	
	   }
	   return (
		<form onSubmit={props.handleSubmit} className="bg-white">
			
	
		
		<Input error={props.errors.email} touched={props.touched.email} onBlur={props.handleBlur} value={props.values.email} change={props.handleChange}  id="email" name="email" type="text" placeHolder="Email"><AiOutlineMail className="h-5 w-5 text-gray-400"/></Input>
		<Input visible={!visible?<AiFillEye className="hover:cursor-pointer" onClick={()=>setVisible(i=>!i)} />:<AiFillEyeInvisible className="hover:cursor-pointer" onClick={()=>setVisible(i=>!i)}/>} error={props.errors.password} touched={props.touched.password} onBlur={props.handleBlur} value={props.values.password} change={props.handleChange} id="password" name="password" type={visible?"text":"password"} placeHolder="Password"><MdOutlinePassword className="h-5 w-5 text-gray-400"/></Input>
		<button type="submit" className="block w-full bg-[#0575e6] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
		<p onClick={()=>router.push("/register")} className="text-sm ml-2 hover:text-blue-500 text-center cursor-pointer">Kayıt Ol	</p>
		
	</form>
	   )
	
}}
	
	</Formik>
	   
    </LoginRegister_ly>
  )
}
export default Login


	