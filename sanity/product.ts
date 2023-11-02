import {defineType, defineField} from "sanity";

export default defineType({
name: "Product",
type: "document",
title: "Products",

fields :[
   
    defineField({
        name:"title",
        title: "Product Title",
        type: "string"

    }),

    defineField({
        name:"tag",
        type:"string",
        title:'Product Tag'
    }),

    defineField({
        name:"Price",
        title: "Product Price",
        type: "number"

    }),
    defineField({
        name:"category",
        title: "Product Category",
        type: "string",
    }),
    defineField({
        name:"img",
        title: "Product Image",
        type: "image",
        options: {hotspot : true}
    })
]       
            
         
});



