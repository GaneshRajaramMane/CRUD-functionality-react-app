import { useContext, useState } from "react";
import { productContext } from "../../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create(){
   const [products,setproducts]=useContext(productContext)
   const [image,setimage]= useState('')
   const [title,settitle]= useState('')
   const [category,setcategory]= useState('')
   const [price,setprice]= useState('')
   const [description,setdescription]= useState('')
   const navigate=useNavigate()

   
  

   const addproducthandler=(e)=>{
    e.preventDefault();

    if(title.trim().length<5 ||
       image.trim().length<5||
       price.trim().length<1||
       description.trim().length<5||
       category.trim().length<3)
       {
        alert("Each input must have minimum 4 characters except price")
        return
       }
    
       const product={
        id:nanoid(),
        image,
        title,
        category,
        price,
        description
    }
    setproducts([...products,product]);
   localStorage.setItem("products",JSON.stringify([...products,product]))
    navigate("/");
    
   }
  

   
 
    return(
        <>
   
        <form  onSubmit={addproducthandler} className=" flex flex-col items-center w-screen h-screen p-[5%] ">
            <h1 className=" mb-5 text-3xl w-1/2 font-semibold">Add New Product</h1>
            <input
             className="bg-zinc-100 p-3 w-1/2 text-lg rounded mb-3"
              type="link" 
              placeholder="Image Link"
              onChange={(e)=>setimage(e.target.value)}
              value={image}
              />
              <input
             className="bg-zinc-100 p-3 w-1/2 text-lg rounded mb-3"
              type="text" 
              placeholder="Title"
              onChange={(e)=>settitle(e.target.value)}
              value={title}
              />
              <div className="w-1/2">
              <input
             className="bg-zinc-100 p-3 mr-[2%] w-[49%] text-lg rounded mb-3"
              type="text" 
              placeholder="category"
              onChange={(e)=>setcategory(e.target.value)}
              value={category}
              />
              <input
             className="bg-zinc-100 p-3 w-[49%] text-lg rounded mb-3"
              type="text" 
              placeholder="price"
              onChange={(e)=>setprice(e.target.value)}
              value={price}
              />
              </div>
              <textarea
              
             className="bg-zinc-100 p-3 w-1/2 text-lg rounded mb-3 h-[15vw]"
              type="text" 
              placeholder="Enter Product Here Description..."
              onChange={(e)=>setdescription(e.target.value)}
              value={description}
              />
              <div className="w-1/2">
              <button className="mt-5 px-2 py-2 border-indigo-900 text-sm	 border  rounded font-bold  transition ease-in-out delay-150 hover:text-zinc-900 hover:border-0 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-200 duration-300 ..." href="/create">Add Product</button>
              </div>
              

        </form>
        
        </>
    )
}
export default Create;