import React from 'react'

const deleteButton = ({id}) => {


  const deleteUser=async()=>{

    const response= await fetch(`http://localhost:3000/api/Data/${id}`)
  }
    if(response.status===200){
        alert('User Deleted')

  return (
    <div>


        <button className='px-3  rounded-md bg-red-700' onClick={deleteUser}>Delete</button>
      
    </div>
  )
}

export default deleteButton
