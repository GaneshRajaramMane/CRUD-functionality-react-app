import React, { useContext, useEffect, useState } from "react";
import Nav from './Nav';
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../../utils/Context";
import Loading from "./Loading";
import axios from "axios";

function Home(){
    
    const[product]=useContext(productContext)
    const {search}=useLocation();
    const category=decodeURIComponent(search.split("=")[1])
    
   
    

   const [filterproduct,setfilterproduct] =useState()

    /*const categorydata= async()=>{
        try {
           const {data}=await axios.get(`https://fakestoreapi.com/products/category/${category}`) 
            setfilterproduct(data)
            
        } catch (error) {
            console.log(error)
        }
    }*/

    useEffect(()=>{
        if (!filterproduct || category== "undefined") setfilterproduct(product)
        if(category != "undefined"){
          setfilterproduct(product.filter(p=>p.category==category))
        } //categorydata()
    },[category,product])
    
    return product ?(
        <>
        <Nav/>
       
        <div className="w-[85%] pt-[5%] p-10 flex flex-wrap overflow-y-auto ">
         
         {
         filterproduct&& filterproduct.map(item=><Link key={item.id} to={`/details/${item.id}`} className="mr-5 mb-3  card  flex flex-col justify-center items-center rounded  p-3 border shadow w-[18%] h-[45vh]  ">
         <div className="mb-3 w-full h-[80%]  transition-all hover:scale-110"
          style={{
          background: `url(${item.image}) center/contain  no-repeat`,maxWidth: '100%',maxHeight: '100%',
          }}
          ></div>
          <h1 className="  hover:text-blue-300 ">{item.title}</h1>
          </Link>)
          }
        
         
         </div>
        </>):(<Loading/>)
}

export default Home