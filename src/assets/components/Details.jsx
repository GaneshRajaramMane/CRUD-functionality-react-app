import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { productContext } from "../../utils/Context";

function Details(){
    

const [products,setproducts]=useContext(productContext)

   const {id}= useParams()
   const [product,setproduct]=useState(null)
   /*const productdata=async()=>{
    try {
        const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`);
        setproduct(data);
        
    } catch (error) {
        console.log(error);
    }
   }*/
   useEffect(()=>{
    if(!product){
        setproduct(products.filter(p=>p.id == id)[0]);
        
    }
    //productdata()
   },[]);

   const deleteproduct=(id)=>{
    const naya =products.filter((p)=>p.id !== id);
    setproducts(naya);
    localStorage.setItem('products',JSON.stringify(naya))
    navigate('/')
   }

   const navigate= useNavigate()
    return product ?(
        <div className="w-[80%] flex pt-[10%] h-full m-auto p=[10%]">
            <img className="w-[50%] h-[70%] object-contain" src={product.image}></img>
            <div className="ms-10 w-40%">
                <h1 className="text-4xl font-bold mt-10">{product.title}</h1>
                <h1 className="text-2xl font-bold mt-3 text-zinc-900">₹{product.price}</h1>
                <p className="text-lg font-bold mt-3 text-zinc-500 mb-5">{product.description}</p>
                
                <button onClick={()=>deleteproduct(product.id)} className="py-3 px-1 border-red-600 text-red-600 rounded  ">Delete</button>
                <button onClick= {()=>navigate(-1)} className=" block mt-10 py-2 px-5 bg-zinc-900 text-zinc-100 rounded-lg  ">back</button>
            </div>

        </div>
    ):<Loading/>;
}
export default Details