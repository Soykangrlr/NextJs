import LoginRegister_ly from "../components/layouts/loginRegister_ly"
import {AiOutlineUser,AiOutlinePhone, AiOutlineMail,AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import {MdOutlinePassword}from "react-icons/md"
import Input from "../components/ui/input"
import { useEffect, useState } from "react"
import MaskedInput from 'react-text-mask'
import { Formik } from 'formik'
import {registerValidation} from '../validationSchema'
import { useAppDispatch, useAppSelector } from "../store/hook"
import { registerUser } from "../store/slice/userSlice"
import { useRouter } from "next/router"
import Loading from "../components/ui/loading"
interface Values {
	name: string;
	lastName: string;
	email: string;
	password:string,
	passwordConfirm:string
	phoneNumber:string
  }
function Register() {
	
	const [phone,setPhone]=useState("")
	const [phoneNmber,setPhoneNumber]=useState("")
	const [keyBoard,setKeyBoard]=useState(false)
	const [visible,setVisible]=useState(false)
	const[comfirmVisible,setcomfirmVisible]=useState(false)
	const router=useRouter()
	const dispatch=useAppDispatch()
	const user=useAppSelector(state=>state.userSlice)
	console.log(user.token);
	useEffect(()=>{
		if(user.token){
		
		  router.push("/")
		
		}
		
	   },[user])
	const inputPhone=(id:string)=>{
	
		if(phone.length<10){
			setPhone(item=>item+id)
			
		}
		else{
			setKeyBoard(false)
		}
		
	}
	useEffect(()=>{
		if(phone.length===10){
			setKeyBoard(false)
		
		}
		setPhoneNumber(item=>item=`+90(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`)
	},[phone])

	  const initialValues: Values = {
		name: '',
	  lastName: '',
	  email: '',
	  password:"",
	  passwordConfirm:"",
	  phoneNumber:"" }
	 
	
	  if(user.token){
        router.push("/")
    }
	
  return (
    <LoginRegister_ly>
		  {user.isloading&& <Loading/>
}       
<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
	<p className="text-sm font-normal text-gray-600 mb-7">Sign Up to Get Started</p>
		<Formik<Values>
         initialValues={initialValues}
         onSubmit={(values, actions) => {
          
		   const {name,email,password}=values
           dispatch(registerUser({name,email,password}))
         }}
		 validationSchema={registerValidation}
		 validateOnChange={false}
		 validateOnBlur={false}
       >{(props)=>{{
		useEffect(()=>{
			props.setFieldValue("phoneNumber",phoneNmber)
		},[phoneNmber])
	
	   }
	   return (
		<form onSubmit={props.handleSubmit} className="bg-white">
			
		<Input error={props.errors.name} touched={props.touched.name} onBlur={props.handleBlur} value={props.values.name} change={props.handleChange} id="name" name="name" type="text" placeHolder="First Name"><AiOutlineUser className="h-5 w-5 text-gray-400"/></Input>
		<Input error={props.errors.lastName} touched={props.touched.lastName} onBlur={props.handleBlur} value={props.values.lastName} change={props.handleChange} id="lastName" name="lastName" type="text" placeHolder="Last Name"><AiOutlineUser className="h-5 w-5 text-gray-400"/></Input>
	
		<div 
		 className="mb-4 relative">
		<div  className="flex items-center border-2 py-2 px-3 rounded-2xl ">
		<AiOutlinePhone className="h-5 w-5 text-gray-400"/>
		<MaskedInput
		onFocus={()=>setKeyBoard(true)}
		value={props.values.phoneNumber}
		readOnly
		onBlur={props.handleBlur}
		 className="pl-2 outline-none border-none"
		placeholder="Phone Number"
  		mask={['+','9','0','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
/>
		
		</div>
		{ props.errors.phoneNumber?( <span className="text-xs text-red-600  " >*{props.errors.phoneNumber}</span>):null}
		<div  style={{display:keyBoard?"block":"none"}} className="z-10 absolute p-6 w-4/5 left-1/2  -translate-x-1/2 bg-gray-300 opacity-80">
	<div className="grid grid-cols-3 gap-4 text-center">
	
<kbd onClick={()=>inputPhone("2")}  className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg hover:bg-[#0575e6] hover:text-white hover:cursor-pointer ">1</kbd>
<kbd onClick={()=>inputPhone("2")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">2</kbd>
<kbd onClick={()=>inputPhone("3")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">3</kbd>
<kbd onClick={()=>inputPhone("4")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">4</kbd>
<kbd onClick={()=>inputPhone("5")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">5</kbd>
<kbd onClick={()=>inputPhone("6")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">6</kbd>
<kbd onClick={()=>inputPhone("7")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">7</kbd>
<kbd onClick={()=>inputPhone("8")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">8</kbd>
<kbd onClick={()=>inputPhone("9")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-[#0575e6] hover:text-white hover:cursor-pointer">9</kbd>
<kbd onClick={()=>setPhone(item=>item.slice(0,-1))} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg hover:bg-yellow-500 hover:text-white hover:cursor-pointer ">Sil</kbd>
<kbd  onClick={()=>inputPhone("0")} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg hover:bg-[#0575e6] hover:text-white hover:cursor-pointer ">0</kbd>
<kbd onClick={()=>setKeyBoard(false)} className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg  hover:bg-red-600 hover:text-white hover:cursor-pointer ">X</kbd>



	</div>

</div>	
		</div>
		<Input error={props.errors.email} touched={props.touched.email} onBlur={props.handleBlur} value={props.values.email} change={props.handleChange}  id="email" name="email" type="text" placeHolder="Email"><AiOutlineMail className="h-5 w-5 text-gray-400"/></Input>
		<Input visible={!visible?<AiFillEye className="hover:cursor-pointer" onClick={()=>setVisible(i=>!i)} />:<AiFillEyeInvisible className="hover:cursor-pointer" onClick={()=>setVisible(i=>!i)}/>} error={props.errors.password} touched={props.touched.password} onBlur={props.handleBlur} value={props.values.password} change={props.handleChange} id="password" name="password" type={visible?"text":"password"} placeHolder="Password"><MdOutlinePassword className="h-5 w-5 text-gray-400"/></Input>
		<Input visible={!comfirmVisible?<AiFillEye className="hover:cursor-pointer" onClick={()=>setcomfirmVisible(i=>!i)} />:<AiFillEyeInvisible className="hover:cursor-pointer" onClick={()=>setcomfirmVisible(i=>!i)}/>} error={props.errors.passwordConfirm} touched={props.touched.passwordConfirm} onBlur={props.handleBlur} value={props.values.passwordConfirm} change={props.handleChange}  id="passwordConfirm" name="passwordConfirm" type={comfirmVisible?"text":"password"} placeHolder="Password Confirm"><MdOutlinePassword className="h-5 w-5 text-gray-400"/></Input>
		<button type="submit" className="block w-full bg-[#0575e6] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
		<p onClick={()=>router.push("/login")} className="text-sm ml-2 hover:text-blue-500 text-center cursor-pointer">I Have Account Login	</p>
		
	</form>
	   )
	
}}
	
	</Formik>
	   
    </LoginRegister_ly>
  )
}
export default Register