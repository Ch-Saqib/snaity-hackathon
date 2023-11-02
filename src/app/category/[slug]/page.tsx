import { Getdata } from '@/DataFetch/fetch';
import Productcard from "@/components/ui/productcard";


const GetProductbyCategory=async (category:string)=>{
const data = await Getdata();
// console.log(data);

 return data.filter((Products)=>Products.category === category);
};

export default async function Page({ params }: { params: { slug: string } }) {
const result= await GetProductbyCategory(params.slug);
  return<div className='flex justify-evenly flex-wrap py-8 mt-10'>

{
  result.length>0 ? (result.map((product)=>(
    <Productcard
    key={product._id} 
    title={product.title}
    tag={product.tag}
     price={product.price} 
     img={product.img}
     category={product.category}
     id={product._id}
     />
    ))) : <p>No Products Found </p>
    }
  
  </div>
  
};