import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'
import CustomerServices from '../services/CustomerServices'

export const AddCustomer = () => {
   const[name,setName]=useState('')
   const[age,setAge]=useState('')
   const[city,setCity]=useState('')
   const[area,setArea]=useState('')
   const[date,setDate]=useState('')
   const[emailId,setEmailID]=useState('')
   
   
    
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update customer.Id value from url: ",{id})
return <h2 className="text-center "> Update Customer</h2>
}
else{
 console.log("returned Title Add customer.Id value from url:",{id})

return <h2 className="text-center "> AddCustomer</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     CustomerServices.getCustomerById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setName(response.data.name);
       setAge(response.data.age);
       setCity(response.data.city);
       setArea(response.data.area);
       setDate(response.data.date);
           
       setEmailID(response.data.emailId);                   

       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{name,age,city,area,date,emailId}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateCustomer=(e)=>
   { e.preventDefault();
      
       const customer={ name, age,city,area,date,emailId}
       console.log("Host object received form form:",customer);
if(id){
 //update logic
 CustomerServices.updateCustomer(id,customer).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/customer')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
      
     CustomerServices.addCustomer(customer).
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





  {/* 1. Name text box */}
  <div className='form-group mb-2'>
                 <label className ='form-label'>Name</label>
                 <input type="text" placeholder="Enter Customer Name" name=" Customer Name"
                  value={name} className='form-control'
               onChange={(e) => {setAge(e.target.value)}}
                    /></div>






           {/* 1. Age text box */}
                 <div className='form-group mb-2'>
                 <label className ='form-label'>Age</label>
                 <input type="text" placeholder="Enter Customer Age" name=" CustomerAge"
                  value={age} className='form-control'
               onChange={(e) => {setAge(e.target.value)}}
                    /></div>

 {/*2. City text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>City</label>
                 <input type="text" placeholder="Enter Customer City" name="City"
                  value={ city} className='form-control'
               onChange={(e) => {setCity(e.target.value)}}
                    /></div>

 

{/*4. Area text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Area</label>
                 <input type="text" placeholder="Enter your Area " name="area"
                  value={  area} className='form-control'
               onChange={(e) => {setArea(e.target.value)}}
                    /></div>



{/*4. Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Date</label>
                 <input type="text" placeholder="Enter Date " name="date"
                  value={ date} className='form-control'
               onChange={(e) => {setDate(e.target.value)}}
                    /></div>



{/*4. Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>EmailId</label>
                 <input type="text" placeholder="Enter EmailId " name="emailId"
                  value={ emailId} className='form-control'
               onChange={(e) => {setEmailID(e.target.value)}}
                    /></div>











 
<button onClick={(e)=>saveOrUpdateCustomer(e)} className='btn btn-success'>Save Customer</button>
&nbsp;&nbsp;
<Link to="/customer" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
