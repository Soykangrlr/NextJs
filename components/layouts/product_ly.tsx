import Link from "next/link"
import { ReactNode } from "react"
import { useAppDispatch } from "../../store/hook"
import { logout } from "../../store/slice/userSlice"

interface Props{
    children:ReactNode
}
function Product_ly(props:Props) {
  const dispatch=useAppDispatch()
  const clickLogout=()=>{
    dispatch(logout())
    
  }
  return (
    <>
     <nav
      className="flex justify-between items-center py-3 px-6 bg-[#f2f2f2] w-full drop-shadow-md"
    >
      <Link href="/">
      <div
        className="bg-[#0671e1] py-2 px-4 text-xl text-white font-bold font-sans rounded-3xl"
      >
        Piton<span className="text-[#accff5]">Shop</span>
      </div>
      </Link>
      <div onClick={()=>clickLogout()}
        className="bg-white rounded-3xl p-2 px-4 text-sm font-semibold hover:cursor-pointer"
      >
        Logout
      </div>
    </nav>
   
    {props.children}
  
    <footer className="relative  bg-[#f2f2f2] pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div
            className="bg-[#0671e1] py-2 px-4 text-xl w-fit text-white font-bold font-sans rounded-3xl"
          >
            Piton<span className="text-[#accff5]">Shop</span>
          </div>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                The most popular book shop for IT
            </h5>
         
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span
                  className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                  >Useful Links</span
                >
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >Blog</a
                    >
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >Github</a
                    >
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >Free Products</a
                    >
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span
                  className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                  >Other Resources</span
                >
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >MIT License</a
                    >
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Product_ly