import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'
import AdminService from '../services/AdminService'

export const AddAdmin = () => {
   const[adminName,setAdminName]=useState('')
   const[email,setEmail]=useState('')
   const[phoneNo,setPhoneNo]=useState('')
    
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update admin.Id value from url: ",{id})
return <h2 className="text-center "> Update Admin</h2>
}
else{
 console.log("returned Title Add admin.Id value from url:",{id})

return <h2 className="text-center "> Add Admin</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     AdminService.getAdminById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setAdminName (response.data.adminName);
       setEmail(response.data.email);
       setPhoneNo(response.data.phoneNo);
                              

       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{adminName,email,phoneNo}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateAdmin=(e)=>
   { e.preventDefault();
      
       const admin={adminName,email,phoneNo }
       console.log("Admin object received form form:",admin);
if(id){
 //update logic
 AdminService.updateAdmin(id,admin).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/admin')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
      
     AdminService.addAdmin(admin).
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
           {/* 1.HostContact text box */}
                 <div className='form-group mb-2'>
                 <label className ='form-label'> AdminName</label>
                 <input type="text" placeholder="Enter AdminName  " name="  adminName"
                  value={  adminName} className='form-control'
               onChange={(e) => {setAdminName(e.target.value)}}
                    /></div>

 {/*2. email text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'> Admin Email</label>
                 <input type="text" placeholder="Enter EmailID" name=" email"
                  value={email} className='form-control'
               onChange={(e) => {setEmail(e.target.value)}}
                    /></div>

 

{/*4. phoneNo text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Contact</label>
                 <input type="text" placeholder="Enter your ContactNumber" name="phoneNo"
                  value={  phoneNo } className='form-control'
               onChange={(e) => {setPhoneNo(e.target.value)}}
                    /></div>

 
<button onClick={(e)=>saveOrUpdateAdmin(e)} className='btn btn-success'>Save Admin</button>
&nbsp;&nbsp;
<Link to="/Admin" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
