import React from 'react' 
import Productcard from '@/components/ui/productcard'
import { Getdata } from '@/DataFetch/fetch';

 
const Products = async()=>{
  const data = await Getdata(); 


const Productchecks=data.slice(0,3)   

  return (
    <div className='flex justify-evenly mt-16 py-10'>
   {
    Productchecks.map((item)=>(
<Productcard
key={item._id} 
title={item.title}
 price={item.price} 
 tag={item.tag}
 img={item.img }
 category={item.category}
 id={item._id}
 />

    ))};
       </div>
  );
};

export default Products