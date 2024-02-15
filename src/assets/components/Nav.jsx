import React, { useContext } from "react";
import { productContext } from "../../utils/Context";
import { Link } from "react-router-dom";


function Nav(){
  const [product]=useContext(productContext)
  const productdistinct=product.map(({category})=>category)
  const uniproduct=[...new Set(productdistinct)]
 
  

    return(
        
        <nav className="w-[15%] h-full bg-zinc-300 flex flex-col items-center pt-5">
         
       <a className="px-2 py-2 border-indigo-900 text-lg	 border text-blue-600 rounded font-bold  transition ease-in-out delay-150 hover:text-zinc-100 hover:border-0 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ..." href="/create">ADD NEW PRODUCT</a>
       <hr className="w-[95%] my-2 border-zinc-900 "></hr>
       <h1 className="w-[80%]   font-bold text-2xl">Category Filter</h1>
       <div className="w-[80%] mt-3 ">
        {uniproduct.map((c,i)=><Link key={i} to={`?/category=${c}`} className="my-2 mt-4 flex items-center">
           <span className="px-2 py-2  capitalize   rounded font-bold  transition ease-in-out delay-150 hover:text-zinc-100 hover:border-0 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-300 ..." >{c}</span>
         </Link>)}
         
       </div>
        </nav>
     
    )
}
export default Nav