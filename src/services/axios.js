import axios from "axios"
export const commonRequest=async(method,url,body,headers)=>{
    let axiosConfig={
        method,url,data:body,headers:headers?headers:{'Content-Type':'application/json'},timeout:10000
    }
    return await axios(axiosConfig).then((res)=>{
        
        return res
    }).catch(rej=>{
        return rej
    })
}