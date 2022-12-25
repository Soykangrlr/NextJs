import { ReactNode } from "react"


interface Props{
    children:ReactNode
}

function LoginRegister_ly(props:Props) {
  return (
    <div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-3/5 bg-gradient-to-b from-[#0573e2] to-[#021c7a]  justify-start items-center hidden">
		<div className="ml-20">
			<h1 className="text-white font-bold text-4xl font-sans">PitonShop</h1>
			<p className="text-white mt-1">The most popular book shop for IT</p>
			
		</div>
		<div className="absolute -bottom-44 -left-40 w-96 h-96 border-2 rounded-full  border-[#0573e2] "></div>
		<div className="absolute -bottom-56 -left-20 w-96 h-96 border-2 rounded-full border-[#0573e2] "></div>
	
	</div>
	<div className="relative flex md:w-2/5 justify-center py-10 items-center bg-white">
        <div>
       
		{props.children}
        </div>
  
	</div>
</div>
  )
}
export default LoginRegister_ly