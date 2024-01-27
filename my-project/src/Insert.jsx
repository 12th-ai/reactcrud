import React from 'react'
import { useState, useEffect } from 'react'
import { Link,Navigate,useBeforeUnload,useNavigate } from 'react-router-dom';

function Insert() {

  // let Navigate = useNavigate();

  const [users , setusers] = useState({

    user_name : '',

    user_email : '',

    password : ''

  })

  const handlechange =(event) =>{

    const  {name , value} = event.target;

    setusers({
      ...users,
    });
  };

  const handlesubmit =(event)=>{

    event.preventDefault();
     
    fetch('http://localhost/clone/reactcrud/my-project/src/api/insert.php',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(users),
      credentials: 'include',
    })
    .then((response) => response.json())
  .then((data)=>console.log(data))
  .catch(error =>console.log('error',error));

  }

  return (
    <div>
    <h1>insert data in database </h1>

    <h1>add user</h1>

    <form action="post" onSubmit={handlesubmit}>
    
     <label htmlFor="">user name</label>
     <input type="text" name="user_name" id="" onChange={handlechange} /> <br />

     <label htmlFor="">user email</label>
     <input type="text" name="user_email" id="" onChange={handlechange} /> <br />

     <label htmlFor="">user name</label>
     <input type="password" name="user_password" id="" onChange={handlechange} /> <br />

     <input type="submit" value="add data" />
    </form>

    </div>
  )
}

export default Insert