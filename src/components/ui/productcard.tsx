import React from 'react'
import Image, { StaticImageData } from 'next/image'
import AddtoCart from '@/views/AddtoCart'
import Link from 'next/link'
// import { urlForImage } from 'sanity/lib/image'



function Productcard  (props:{
  title:string, 
  price:number , 
  tag: string,
  img:any,  
category:string,
id: number})  {
  return (
<Link href={`/products/${props.id}`}>
    <div className='py-5'>
 
<Image src={props.img} alt='products'/>
<h3 className='text-lg font-bold mt-3'>{props.title}</h3>
<p className='text-lg font-bold'>${props.price}</p>
<p className='text-lg font-bold'>Category: <span className='text-base font-normal capitalize'>
  {props.category}</span> </p>
  
<AddtoCart/>

    </div>
    </Link>
  )
}

export default Productcard;