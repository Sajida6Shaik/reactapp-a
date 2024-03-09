import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'

import UserServices from '../services/UserServices'
export const AddUser = () => {
 
   const[emailId,setEmailId]=useState('')
   const[username,setUserName]=useState('')
   const[password,setPassword]=useState('')
   const[role,setRole]=useState('')
   
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update user.Id value from url: ",{id})
return <h2 className="text-center "> Update User</h2>
}
else{
 console.log("returned Title Add user.Id value from url:",{id})

return <h2 className="text-center "> Add User</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     UserServices.getUserById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
        
       setEmailId(response.data.emailId);
       setUserName(response.data.username);
       setPassword(response.data.password);
       setRole(response.data.role);
                              

       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{emailId,username,password,role}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateUser=(e)=>
   { e.preventDefault();
      
       const user={emailId,username,password,role  }
       console.log("User object received form form:",user);
if(id){
 //update logic
 UserServices.updateUser(id,user).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/user')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
      
     UserServices.addUser(user).
     then((response)=>{console.log("Response received from save api..."
     + JSON.stringify(response.data))
      }).
     catch(error=>{
       console.log("error received from save api..",error)
      });
     }
}
   
  
  return (

    <div className='container mt-2 mb-5 '>




       <div className='card col-md-6 offset-md-3'>



           {/* <h2 className="text-center "> AddEmployee</h2> */}
              {changeTitle()}
           <div className='card-body'>
               <form>
           {/* 1. EmailId text box */}
                 <div className='form-group mb-2'>
                 <label className ='form-label'>EmailID</label>
                 <input type="text" placeholder="Enter EmailID" name=" EmailID"
                  value={ emailId} className='form-control'
               onChange={(e) => {setEmailId(e.target.value)}}
                    /></div>

 {/*2. username text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>UserName</label>
                 <input type="text" placeholder="Enter Username" name=" username"
                  value={username} className='form-control'
               onChange={(e) => {setUserName(e.target.value)}}
                    /></div>






{/*2. password text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Password</label>
                 <input type="text" placeholder="Enter Password" name="password"
                  value={password} className='form-control'
               onChange={(e) => {setPassword(e.target.value)}}
                    /></div>

 

{/*4. Role text box */}
<div className='form-group mb-2'>
<select className="form-select" aria-label="Default select example">
  <option>Select Your Role</option>
  <option value="1">Customer</option>
  <option value="2">Host</option>
  <option value="3">Admin</option>
   
</select>
                  
                  </div>

 
<button onClick={(e)=>saveOrUpdateUser(e)} className='btn btn-success'>Save User</button>
&nbsp;&nbsp;
<Link to="/user" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
