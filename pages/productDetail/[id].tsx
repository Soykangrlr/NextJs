import Product_ly from "../../components/layouts/product_ly";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { productThunk } from "../../store/slice/detailSlice";
import Loading from "../../components/ui/loading";
import { productAll } from "../../store/slice/productSlice";
function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  useEffect(() => {
   const getDEtail= async ()=>{
  await dispatch(productAll(user.token))
   await dispatch(productThunk({ token: user.token, productId: id }));
   }
   
  getDEtail()
  }, [id]);
  useEffect(() => {
    const getDEtail= async ()=>{
      await dispatch(productThunk({ token: user.token, productId: id }));
      }
      
     getDEtail()
  }, []);
  const {data,isLoading} = useAppSelector((state) => state.productDetail);



  console.log("data",data);
  
  return (
    <Product_ly>
     
  {isLoading?<Loading/>: <div className="container flex mx-auto relative  border p-10 gap-x-20 flex-col md:flex-row  my-12 rounded-2xl  overflow-hidden">
        <div className="shadow-book p-1 w-44 md:basis-1/4">
          <img
            className="md:h-96 h-44 w-full"
            src={`https://assignment-api.piton.com.tr${data?.image}`}
            alt=""
          />{" "}
        </div>
        <div className="md:flex-1 mt-4 md:mt-0 font-serif leading-7 align-middle tracking-widest">
          <h2 className="md:text-2xl text-md font-bold w-2/5">
            {data?.name}
          </h2>
          <p className="mt-5 ">
           {data?.description}
          </p>
        </div>
        <div className="absolute md:top-5 md:right-8 top-2 right-2 font-sans flex items-center text-gray-500">
          <span className="mr-2">{data?.likes.length} likes</span>
          <AiFillHeart className="text-red-700" />
        </div>
        <p className="bg-[#0671e1] pl-6 pr-10 bottom-4 -right-8 md:pr-16 py-2 text-white font-bold font-sans md:-right-8 md:bottom-12 md:text-lg text-sm rounded-3xl  absolute">
          {data?.price}.00 tl
        </p>
      </div>}    
     
    </Product_ly>
  );
}
export default ProductDetail;
