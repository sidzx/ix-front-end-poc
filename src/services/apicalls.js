
import { commonRequest } from "./axios";
import { base_url } from "./url";


export const fetchproducts=async()=>{
    return await commonRequest('GET',base_url)
}
export const Adding=async(body)=>{
    return await commonRequest('POST',base_url,body)
}

export const sign=async(body)=>{
    return await commonRequest('POST',base_url,body,"")
}
