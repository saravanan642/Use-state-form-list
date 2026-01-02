import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <h1 className=' text-center text-3xl m-[6%]'>To Do List</h1>
      </div>

      <form>
        <p>Job list</p>
       <input
  className="border border-black border-solid p-2 rounded"
  type="number"
  placeholder="eg. 56839005"
/>

      </form>
    </div>
  )
}

export default Home
