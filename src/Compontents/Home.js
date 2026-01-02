import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <h1 className=' text-center text-3xl m-[6%]'>To Do List</h1>
      </div>

      <form>
        <p>Job list</p>
        <div className=' flex  gap-[40px] bg-slate-600 ml-[2%]  w- fit c'>
          <div className=' flex gap-[20px] m-[10px]'>
            <label className=' text-black font-bold'>Job code</label>
            <input className="border-2 border-solid border-black rounded" type="number " placeholder="eg. 56839005" />
          </div>

          <div className=' flex gap-[20px] m-[10px]'>
            <label className=' text-black font-bold'>Job Tittle</label>
            <input className="border-2 border-solid border-black rounded " type="text " placeholder="eg. Fullstack developer " />
          </div>


          <div className=' flex gap-[20px] m-[10px]'>
            <label className=' text-black font-bold'>Client code Id </label>
            <input className="border-2 border-solid border-black rounded " type="number" placeholder="eg. 56839005" />
          </div>
        </div>






      </form>
    </div>
  )
}

export default Home
