import React, { useEffect, useState } from 'react'

function Userlist() {

  const [users , setusers] = useState([]);
 
  useEffect(()=>{
    const ApiUrl = "http://localhost/clone/reactcrud/my-project/src/api/data.php";


    fetch(ApiUrl)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      setusers(data);
    })
    .catch((err) => console.log(err))
  }, [])


  return (
    <div>userlist
    
    <div className='userlist'>
    <table border={1}>
      <thead>
      <tr>
    <th>user id</th>
    <th>user name</th>
    <th>user email</th>
    <th>password</th>
    
    </tr>
    
      </thead>
    

      <tbody>
      
      {users.map((user , index)=>(
        <tr key={index}>
        <td>{user.user_id}</td>
        <td>{user.user_name}</td>
        <td>{user.user_email}</td>
        <td>{user.password}</td>
        </tr>
      ))
      
      
      }
        </tbody>      
    </table>
    </div>
    
    
    </div>
    
  )
}

export default Userlist