import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroimg from "/public/heroimg.webp"
import Image from "next/image";


const Hero=async ()=>{

return (
   
    <section className="flex flex-col lg:flex-row gap-y-10 py-6">
{/*left section(content) */}
<div className="flex-1">
<Badge className="  px-6 rounded-lg text-md bg-blue-200 text-blue-700 py-3">
    Sale 70%</Badge>
<h1 className="scroll-m-20 text-4xl font-extrabold 
              tracking-tight lg:text-5xl mt-6">
An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can 
      beat your outfit as long as you wear 
      Dine outfits.
      </p>
      <Button className="bg-black h-10 px-6 mt-4"> Start Shopping</Button>
</div>
{/*left section(images) */}
<div className="flex-1">
<Image src={heroimg} alt="hero"/>

</div>
    </section>


)
}
export default Hero;