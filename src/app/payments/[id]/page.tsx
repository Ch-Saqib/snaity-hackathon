import { Getdata } from "@/DataFetch/fetch";



export default async function Payment ({params}:{params:{id:string}}){

   const data = await Getdata();
   
   return (
     
      data.map((item)=>(item.img))

   )

};
