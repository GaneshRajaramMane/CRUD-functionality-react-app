import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const productContext =createContext()
function Context(props){
    const [productData,setproduct]=useState(JSON.parse(localStorage.getItem('products'))||null)

    
    const getproduct=async()=>{
        try {
            const {data}=await axios.get("https://fakestoreapi.com/products")
           
            localStorage.setItem('products', JSON.stringify(data));
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (!productData) {
          getproduct();
        }
      }, [productData]);
    
    
   
    return(
        
       <productContext.Provider value={[productData,setproduct]}>{props.children}</productContext.Provider> 
        
    )
}
export default Context