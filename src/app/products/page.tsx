import React from 'react'
import { Getdata } from '@/DataFetch/fetch';
import Productcard from '@/components/ui/productcard'
 


const AllProducts = async () => {
 const data = await Getdata()
return(

    <div className='flex justify-evenly flex-wrap py-8 mt-10'>
        {data.map((product)=>(
        <Productcard
        key={product._id} 
        title={product.title}
        tag={product.tag}
        price={product.price} 
        img={product.img}
        category={product.category}
        id={product._id}
         />
        ))}
    </div>
)

};

export default AllProducts;