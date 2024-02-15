
import React from "react"
import { Link,Route, Routes, useLocation } from "react-router-dom"
import Home from './assets/components/Home'
import Details  from "./assets/components/Details"
import Create from './assets/components/Create'
import Edit from './assets/components/Edit'
function App() {
  
    const {search,pathname}=useLocation()
  return (
    <>
     <div className=" w-screen h-screen flex">
     { (pathname != "/" || search.length>0) && <Link className="px-3 py-1 rounded bg-red-100 hover:scale-110 absolute left-[20%] top-[4%]" to="/">home</Link>}
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/details/:id" element={<Details/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit/:id" element ={<Edit/>}></Route>
     </Routes>

    </div>
  
    </>
  )
}

export default App
