import { Getdata } from '@/DataFetch/fetch';
import { ProductTypes } from '@/DataFetch/types';
import Quantity from "@/components/Quantity";
import AddtoCart from "@/views/AddtoCart";
import Image from "next/image";
import { urlForImage } from 'sanity/lib/image';

const GetProductbydetails= async(id:number | string)=>{
const data = await Getdata();
  return data.filter((product)=> product._id == id)
};
const sizes =["XS" ,"S" ,"M" ,"L" ,"XL"];

export default async function Page({ params }: { params: { id: number | string } }) {
  const result : ProductTypes[]= await GetProductbydetails(params.id);
return( 
       <div className='flex  flex-wrap py-10 mt-10'>
{
  
  result.map((product)=>(
    <div  key={product._id} className="flex justify-between gap-6">
    {/* left image */}
    <div> 
      <Image src={urlForImage(product.img).url()} 
      alt={product.title}/>
    </div>
     {/* right content */}
     <div>
     <div>
      <h1 className="text-2xl">{product.title}</h1>
      <h2 className="text-base text-gray-400 font-semibold">{product.tag}</h2>
    </div>
    <div>
      <h3 className="text-xs mt-6 font-bold">SELECT SIZE</h3>
    </div>
    {/*sizes*/}
    <div className="flex gap-x-4 mt-3"> 
{
  sizes.map((item,index)=>{
    return ( <div key={index} className=" center h-6 w-6 duration-300 border  bg-gray-200   rounded-full
     mt-2  hover:shadow-xl">
     <span  className="text-[10px] text-center font-bold border  text-gray-600 ">
      {item}
      </span>
   </div>
      );
  })}
    </div>
{/* Quantity */}
<div className="flex gap-x-2 mt-6 items-center">
<h3 className="text-[15px] font-semibold">Quantity:</h3>
<Quantity/>
</div>
<div className=" center gap-x-5 mt-6">
    {/* Add to Cart */}
    <AddtoCart/>
    
    <h3 className="text-2xl font-bold">${product.price.toFixed(2)}</h3>
</div>
     </div>
     </div>
    ))}
  </div>
  )};