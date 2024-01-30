import { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash , faPenToSquare ,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash , faPenToSquare,faPlus,faMinus);

function App() {
const[title,setTitle] = useState("")
const [description , setDescription] = useState("")
const [storagedata , setStoragedata] = useState(JSON.parse(localStorage.getItem("savedtodosdata")))
const[total,setTotal] = useState(JSON.parse(localStorage.getItem("savedtodosdata")).length)

let getdata;
let getindex;




const Addtodofunction = (e)=>{
  e.preventDefault();
  if(title && description){
    let  saveddata =   JSON.parse(localStorage.getItem("savedtodosdata")) || [];
    let saveditems = {
      title:title,
      description:description
    };
    saveddata.push(saveditems);
    localStorage.setItem("savedtodosdata", JSON.stringify(saveddata))
     getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
     setStoragedata(getdata)
    // console.log("insidefunction",getdata.length);
    setDescription("")
    setTitle("")
    setTotal()
    setTotal(JSON.parse(localStorage.getItem("savedtodosdata")).length)
  }
  else{
    alert("Enter Both title/description")
  }

}

const addqty = (e)=>{
  // console.log(+e.target.parentNode.id);
  let getindex = +e.target.parentNode.parentNode.id
  console.log("id",getindex);
  let  saveddata =   JSON.parse(localStorage.getItem("savedtodosdata")) || [];
  let add = +saveddata[getindex].description+1
  let title = saveddata[getindex].title
  console.log( add);
  let saveditems = {  
    title:title,
    description:add
  };
saveddata.splice(getindex,1,saveditems)
localStorage.setItem("savedtodosdata", JSON.stringify(saveddata))
 let getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
 setStoragedata(getdata)
  console.log(getdata);

  setTotal(JSON.parse(localStorage.getItem("savedtodosdata")).length)
}



const decqty = (e)=>{
  console.log(e.target.parentNode);
  console.log(+e.target.parentNode.id);
  let getindex = e.target.parentNode.parentNode.id
  console.log("id",getindex);
  let  saveddata =   JSON.parse(localStorage.getItem("savedtodosdata")) || [];
  let add = +saveddata[getindex].description

  console.log(add);

  if(add>0){
    add = add -1
      let title = saveddata[getindex].title
      console.log( add);
      let saveditems = {  
        title:title,
        description:add
      };
    saveddata.splice(getindex,1,saveditems)
    localStorage.setItem("savedtodosdata", JSON.stringify(saveddata))
     let getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
     setStoragedata(getdata)
      console.log(getdata);
      setTotal(JSON.parse(localStorage.getItem("savedtodosdata")).length)
  }

}


const deletefunction = (e)=>{
  getindex =e.target.parentNode.parentNode.parentNode.id 
console.log(getindex);
let a = JSON.parse(localStorage.getItem("savedtodosdata"))
a.splice(getindex,1)
localStorage.setItem("savedtodosdata", JSON.stringify(a))
getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
setStoragedata(getdata)
setTotal(JSON.parse(localStorage.getItem("savedtodosdata")).length)
}

const editfunction = (e)=>{
  getindex =e.target.parentNode.id
  console.log(getindex);
  let title = prompt("Enter Your Item")
  let description =  prompt("Items quantity")

if(title && description){
  let saveditems = {
    title:title,
    description:description
  };
  let a = JSON.parse(localStorage.getItem("savedtodosdata"))
  a.splice(getindex,1,saveditems)
  localStorage.setItem("savedtodosdata", JSON.stringify(a))
  getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
  setStoragedata(getdata)
  setTotal(JSON.parse(localStorage.getItem("savedtodosdata")).length)
}
else{
  alert("Enter Both title/description")
}
  // let  saveddata =   JSON.parse(localStorage.getItem("savedtodosdata")) || [];

  
  // saveddata.push(saveditems);
  // localStorage.setItem("savedtodosdata", JSON.stringify(saveddata))
  //  getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
  //  setStoragedata(getdata)

}

getdata = JSON.parse(localStorage.getItem("savedtodosdata"))
console.log("outside",storagedata);


  return (
    <div>
      <h1 className=' bg-zinc-700 text-center p-3 text-white'>Shopping-List</h1>

      

      <form className="max-w-md mx-auto flex flex-col shadow-md shadow-slate-500 p-3 m-3 bg-zinc-200">
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_email"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
        onChange={(e)=>setTitle(e.target.value)}
        value={title}

      />
      <label
        htmlFor="floating_email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Items
      </label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input
        type="number"
        name="floating_password"
        id="floating_password"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required=""
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
      />
      <label
        htmlFor="floating_password"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Item qty
      </label>
    </div>
    <button
onClick={Addtodofunction}
      className=" text-center text-white bg-zinc-800   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
      style={{opacity: title && description ? 1: 0.2}}
      disabled = {!title && !description}
    >
      Add Todo
    </button>
  </form>


{
storagedata && storagedata.map((data,ind)=>(
<div key={ind} id = {ind} className=' todoitemsbox shadow-md shadow-slate-500 rounded-md flex  m-auto justify-between items-center sm:w-11/12 lg:w-2/3 bg-zinc-300 mt-3'>
<div className='descriptiondata flex items-center justify-between'>
  <h1 className=' font-bold w-1/3 text-center'>{data.title}</h1>
  <div className=' w-1/3 flex justify-around'>
  <button className=' bg-slate-800 text-white p-1 mr-2 rounded-lg ' onClick={addqty}>
Incr
  </button>
 
  <p className=' flex flex-wrap para mr-2'>{data.description}</p>
  <button className=' bg-slate-800 text-white p-1 rounded-lg ' onClick={decqty}>
Decr
  </button>
  </div>
  </div>

<div className=' w-1/3 text-right'>
  <FontAwesomeIcon icon="pen-to-square" className=' m-2 text-green-600 text-2xl editfunc' 
onClick={editfunction} id={ind}/> 
<FontAwesomeIcon icon="trash"  className=' m-2 text-red-700 text-2xl deltfunc' onClick={deletefunction}/></div>
</div>  
))
}
<h1 className=' text-right mt-3 bg-zinc-700 text-white p-3 text-2xl shadow-lg shadow-neutral-950 border-2 border-stone-950'>Total  {total} Items</h1>
    </div>
  )
}

export default App
