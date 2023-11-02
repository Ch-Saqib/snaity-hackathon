
import { client } from '../../sanity/lib/client'
import { ProductTypes } from './types';

export const Getdata= async():Promise<ProductTypes[]> => {
const res = await client.fetch(`*[_type== "Product"]{
_id,
title,
tag,
category,
price,
img,

}`);

return res;
};


