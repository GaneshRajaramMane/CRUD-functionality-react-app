import { useContext, useEffect, useState } from "react";
import { productContext } from "../../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";


function Edit(){

    const [products,setproducts]=useContext(productContext)
    const {id}=useParams()
    const [Producte,setproducte]=useState({
        title:'',
        image:'',
        description:'',
        category:'',
        price:''
    })
    const [image,setimage]= useState('')
    const [title,settitle]= useState('')
    const [category,setcategory]= useState('')
    const [price,setprice]= useState('')
    const [description,setdescription]= useState('')
    const navigate=useNavigate()
    
    useEffect(()=>{
        setproducte(products.filter(p=>p.id == id)[0]);
    },[id])

    const changehandler=(e)=>{
        
        setproducte({...Producte,[e.target.name]:e.target.value})
    }
    
    
    
   
 
    const addproducthandler=(e)=>{
     e.preventDefault();
 
     if(Producte.title.trim().length<5 ||
     Producte. image.trim().length<5||
     Producte.  price.trim().length<1||
     Producte.  description.trim().length<5||
      Producte.  category.trim().length<3)
        {
         alert("Each input must have minimum 4 characters except price")
         return
        }
     
        
       const pi= products.findIndex(p=>p.id == id)
       const copydata=[...products]
       copydata[pi]=[...products[pi],...Producte]
       console.log()
     setproducts(copydata);
     localStorage.setItem("products",JSON.stringify(copydata))
      navigate('/');
     
    }
    return(
        <>
          <form  onSubmit={addproducthandler} className=" flex flex-col items-center w-screen h-screen p-[5%] ">
            <h1 className=" mb-5 text-3xl w-1/2 font-semibold">Edit Product</h1>
            <input
             className="bg-zinc-100 p-3 w-1/2 text-lg rounded mb-3"
              type="link" 
              placeholder="Image Link"
              name="image"
              onChange={changehandler}
              value={Producte&&Producte.image}
              />
              <input
             className="bg-zinc-100 p-3 w-1/2 text-lg rounded mb-3"
              type="text" 
              placeholder="Title"
              name="title"
              onChange={changehandler}
              value={Producte&&Producte.title}
              />
              <div className="w-1/2">
              <input
             className="bg-zinc-100 p-3 mr-[2%] w-[49%] text-lg rounded mb-3"
              type="text" 
              placeholder="category"
              name="category"
              onChange={changehandler}
              value={Producte&&Producte.category}
              />
              <input
             className="bg-zinc-100 p-3 w-[49%] text-lg rounded mb-3"
              type="text" 
              placeholder="price"
              name="price"
              onChange={changehandler}
              value={Producte&&Producte.price}
              />
              </div>
              <textarea
              
             className="bg-zinc-100 p-3 w-1/2 text-lg rounded mb-3 h-[15vw]"
              type="text" 
              placeholder="Enter Product Here Description..."
              name="description"
              onChange={changehandler}
              value={Producte&&Producte.description}
              />
              <div className="w-1/2">
              <button  className="mt-5 px-2 py-2 border-indigo-900 text-sm	 border  rounded font-bold  transition ease-in-out delay-150 hover:text-zinc-900 hover:border-0 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-200 duration-300 ..." href="/create">Edit Product</button>
              </div>
              

        </form>
        </>
    )
}

export default Edit