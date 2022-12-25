import { ChangeEvent, FunctionComponent, ReactNode } from "react"
import {FormikHandlers,FormikState, FormikTouched} from "formik"

interface Iprops{
    type:string,
    name:string,
    id:string,
    placeHolder:string,
    change:FormikHandlers["handleChange"]
    children:ReactNode,
    visible?:ReactNode
    value:string
    onBlur:FormikHandlers["handleBlur"]
    touched:FormikState<boolean>["touched"]|undefined
    error:FormikState<string>["errors"]|undefined
}


const Input:FunctionComponent<Iprops>=(props)=> {
 
    
  return (
   <div className="mb-4">
    <div className="flex relative items-center border-2 py-2 px-3 rounded-2xl ">
                {props.children}
                <>
				<input  onBlur={props.onBlur} onChange={props.change}  value={props.value}  className="pl-2 outline-none border-none" type={props.type} name={props.name} id={props.id} placeholder={props.placeHolder}  />
                </>
               {props.visible}
    </div>

    {props.touched && props.error?( <span className="text-xs text-red-600 pl-4 " >"{props.error}</span>):null}
    </div>
  )
}
export default Input