import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

 const [Getdata, setGetdata] = useState([])

  const clickHandler = async ()=>{
   const response = await axios.get("https://picsum.photos/v2/list")
   setGetdata(response.data)
  }
  return (
<div className='px-10 py-4 w-full min-h-screen bg-gray-300'>
  <button 
  onClick={clickHandler}
  className='bg-emerald-700 text-white p-2 rounded font-semibold active:scale-95'>
  Get Data
  </button>

  <div>
  { Getdata.map((elem)=>{

   return <div className='flex items-center justify-between'>
  <img className="w-60 h-40 rounded mt-2" src={elem.download_url} alt="" />
  <h1>{elem.author}</h1>
</div>
  })}

  </div>
</div>
  )
}

export default App

