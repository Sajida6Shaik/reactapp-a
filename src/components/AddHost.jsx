import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'

import HostServices from '../services/HostServices'
export const AddHost = () => {
   const[hostContact,setHostContact]=useState('')
   const[hostEmail,setHostEmail]=useState('')
   const[hostName,setHostName]=useState('')
    
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update host.Id value from url: ",{id})
return <h2 className="text-center "> Update Host</h2>
}
else{
 console.log("returned Title Add host.Id value from url:",{id})

return <h2 className="text-center "> AddHost</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     HostServices.getHostById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setHostContact(response.data.hostContact);
       setHostEmail(response.data.hostEmail);
       setHostName(response.data.hostName);
                              

       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{hostContact,hostEmail,hostName}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateHost=(e)=>
   { e.preventDefault();
      
       const host={ hostContact,hostEmail,hostName}
       console.log("Host object received form form:",host);
if(id){
 //update logic
 HostServices.updateHost(id,host).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/host')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
      
     HostServices.addHost(host).
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
                 <label className ='form-label'>HostContact</label>
                 <input type="text" placeholder="Enter HostContact" name=" host Contact"
                  value={ hostContact} className='form-control'
               onChange={(e) => {setHostName(e.target.value)}}
                    /></div>

 {/*2. email text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>HostEmail</label>
                 <input type="text" placeholder="Enter HostEmailID" name="host Email"
                  value={hostEmail} className='form-control'
               onChange={(e) => {setHostEmail(e.target.value)}}
                    /></div>

 

{/*4. Name text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>HostName</label>
                 <input type="text" placeholder="Enter your HostName " name="hostName"
                  value={ hostName } className='form-control'
               onChange={(e) => {setHostName(e.target.value)}}
                    /></div>

 
<button onClick={(e)=>saveOrUpdateHost(e)} className='btn btn-success'>Save Host</button>
&nbsp;&nbsp;
<Link to="/host" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
