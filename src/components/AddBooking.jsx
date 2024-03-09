import React, { useState,useEffect} from 'react'
 
import { Link,useParams,useNavigate } from 'react-router-dom'
import BookingServices from '../services/BookingServices'

export const AddBooking= () => {
   const[price,setPrice]=useState('')
 
   const[fromDate,setFromDate]=useState('')
   const[toDate,setToDate]=useState('')
   const[pickupLocation,setPickupLocation]=useState('')
   const[dropofLocation,setDropOfLocation]=useState('')
   const[bookingStatus,setBookingStatus]=useState('')
   
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update booking.Id value from url: ",{id})
return <h2 className="text-center "> Update Booking</h2>
}
else{
 console.log("returned Title Add booking.Id value from url:",{id})

return <h2 className="text-center "> Add Booking</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     BookingServices.getBookingById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setPrice(response.data.price);
       setFromDate(response.data.fromDate);
       setToDate(response.data.toDate);
       setPickupLocation(response.data.pickupLocation);
       setDropOfLocation(response.data.dropofLocation);
       setBookingStatus(response.data.bookingStatus);
        
       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{ price,fromDate,toDate,pickupLocation,dropofLocation,bookingStatus}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateBooking=(e)=>
   { e.preventDefault();
      
       const booking={  price,fromDate,toDate,pickupLocation,dropofLocation,bookingStatus }
       console.log("Car object received form form:",booking);
if(id){
 //update logic
 BookingServices.updateBooking(id,booking).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/booking')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

  

     BookingServices.addBooking(booking).
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
           

 {/*2. price text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>Price</label>
                 <input type="text" placeholder="Enter your price" name="price"
                  value={ price} className='form-control'
               onChange={(e) => {setPrice(e.target.value)}}
                    /></div>


                    {/*From Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>FromDate</label>
                 <input type="text" placeholder="Enter your From-Date (eg:yyyy-mm-dd)" name="from-Date"
                  value={fromDate} className='form-control'
               onChange={(e) => {setFromDate(e.target.value)}}
                    /></div>


{/* To-Date text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>ToDate</label>
                 <input type="text" placeholder="Enter your To-Date (eg:yyyy-mm-dd)" name="to-Date"
                  value={toDate} className='form-control'
               onChange={(e) => {setToDate(e.target.value)}}
                    /></div>




{/* 5  text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>PickUpLocation</label>
                 <input type="text" placeholder="Enter your pickupLocation" name="pickupLocation"
                  value={pickupLocation} className='form-control'
               onChange={(e) => {setPickupLocation(e.target.value)}}
                    /></div>


{/*4. Drop Of Location text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>DropOfLocation</label>
                 <input type="text" placeholder="Enter your DropOfLocation" name="dropofLocation"
                  value={dropofLocation} className='form-control'
               onChange={(e) => {setDropOfLocation(e.target.value)}}
                    /></div>

 


 {/*4. Drop Of Location text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'> Select Your BookingStaus</label>
                  <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1" >
   UpComing 
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
   Ongoing
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    Completed
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
  Cancelled
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault5">
   NotServed
  </label>
</div>




</div>

{/* submit button */}


<button onClick={(e)=>saveOrUpdateBooking(e)} className='btn btn-success'>Save Booking</button>
&nbsp;&nbsp;
<Link to="/booking" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
