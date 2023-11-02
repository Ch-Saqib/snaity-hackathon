import Image from 'next/image'
import React from 'react'
import logo from "public/Logo.webp"
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'


 const Header = () => {
  return (
    <div className='flex justify-between flex-wrap items-center py-6 px-8 '>
<div>
<Link href={"/"}><Image
 src={logo} className='w-40'
 alt="logo"
/>
</Link>
</div>

        <ul className='flex gap-x-10 text-bold'>

<li className='text-lg'><Link href= {"/category/female"}>
Female</Link>
</li>
<li className='text-lg'> <Link href= {"/category/male"}>
Male</Link> 
</li>
<li className='text-lg'> <Link href= {"/category/kids"}>
   Kids</Link> 
   </li>
   <li className='text-lg'><Link href= {"/category/Sports"}>
Sports</Link>
</li>
<li className='text-lg'> <Link href= {"/products"}>
All Products</Link> 
</li>

        </ul>
        
        
        
<ul className='flex bg-gray-300 justify-center items-center rounded-full w-10 h-10'>
<ShoppingCart className='w-5 h-5'/>
</ul>

    </div>
  )
}

export default Header;