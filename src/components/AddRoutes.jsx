import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'
import RoutesService from '../services/RoutesService'

export const AddRoutes= () => {
    const[sourceLocation,setSourceLocation]=useState('')
    const[destinationLocation,setDestinationLocation]=useState('')
    
   const[startDate,setStartDate]=useState('')
   const[endDate,setEndDate]=useState('')
    
   
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update Routing.Id value from url: ",{id})
return <h2 className="text-center "> Update Routing</h2>
}
else{
 console.log("returned Title Add Routing.Id value from url:",{id})

return <h2 className="text-center "> Add Routing</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     RoutesService.getRouteById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setSourceLocation(response.data.sourceLocation);
       setDestinationLocation(response.data.destinationLocation);
       setStartDate(response.data.startDate);
       setEndDate(response.data.endDate);
        
        
       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{sourceLocation ,destinationLocation,startDate,endDate}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateRoutes=(e)=>
   { e.preventDefault();
      
       const routes={sourceLocation ,destinationLocation,startDate,endDate    }
       console.log("Routes object received form form:",routes);
if(id){
 //update logic
RoutesService.updateRoutes(id,routes).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/routes')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

  

     RoutesService.AddRoutes( routes).
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



           
              {changeTitle()}
           <div className='card-body'>
               <form>
           

  


                    {/*From Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>StartDate</label>
                 <input type="text" placeholder="Enter your  Start-Date (eg:yyyy-mm-dd)" name="from-Date"
                  value={startDate} className='form-control'
               onChange={(e) => {setStartDate(e.target.value)}}
                    /></div>


{/* To-Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>EndDate</label>
                 <input type="text" placeholder="Enter your  End-Date (eg:yyyy-mm-dd)" name="end-Date"
                  value={endDate} className='form-control'
               onChange={(e) => {setEndDate(e.target.value)}}
                    /></div>




{/* 5  text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>SourceLocation</label>
                 <input type="text" placeholder="Enter your SourceLocation" name=" sourceLocation"
                  value={ sourceLocation} className='form-control'
               onChange={(e) => { sourceLocation(e.target.value)}}
                    /></div>


{/*4. Drop Of Location text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>DestinationLocation</label>
                 <input type="text" placeholder="Enter your DestinationLocation" name=" destinationLocation"
                  value={ destinationLocation} className='form-control'
               onChange={(e) => {setDestinationLocation(e.target.value)}}
                    /></div>

 

{/* submit button */}


<button onClick={(e)=>saveOrUpdateRoutes(e)} className='btn btn-success'>Save Routes</button>
&nbsp;&nbsp;
<Link to="/routes" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
