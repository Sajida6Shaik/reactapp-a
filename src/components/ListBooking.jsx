 
import React ,{useState}from 'react'
import{Link,useNavigate}from 'react-router-dom'
import BookingServices from '../services/BookingServices'
import {useEffect}from 'react'


export const ListBooking = () => {

 //const [state variable,function that can chnage the state variable]
 const[BookingArray,setBookingArray]=useState([])

 const navigate=useNavigate();



 const deleteBooking=(id)=>{
  console.log("Delete employee handler fired.Id value received=",id)

   BookingServices.deleteBooking(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllBookings()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}
const fetchAllBookings=()=>{
  console.log("fetchAllBookings fired..")
   BookingServices.getAllBookings().then((response)=>{
    console.log("Response received from API",response.data)

   setBookingArray(response.data);
   console.log("State variable  assigned with response.data")


  })

}


  //arrow function and dependency array
useEffect(()=>{
  console.log("UseEffect Hoook Fired.......")
  fetchAllBookings()

  },[])
  
 
 
  return (
    <div  className='container'> 

{console.log("Application Rendered")}
     <h2 className='text-center'> List Of Booking Details</h2>
     <Link to ="/addbooking" className='btn btn-primary'>Add Bookings</Link>

       <table className="table table-dark table-striped">
           <thead>
               <tr className='table-warning' >
       
                   <th>BookingId</th>   
                   <th>CustomerName</th>
                   <th>PickUp Location</th>
                   <th>DropOff Location</th>
                   <th>From-Date</th>
                   <th>To-Date</th>
                   <th>Price</th>
                   <th>CarModel</th>
                   <th>CarID</th>
                   <th>HostName</th>
                   <th>HostContact</th>
                   <th>BookingStatus</th>
                   <th>Actions</th>
                   <th>Delete</th>
 
               </tr>
           </thead>
           
           <tbody>
           {

            BookingArray.map((booking,key)=>
               // returntype
               <tr key={key}> 
                  
                   <td>{booking.bookingId}</td>
                   <td>{booking.customer.user.username}</td>
                 
                   <td>{booking.pickupLocation}</td>
                   <td>{booking.dropOfLocation}</td>
                   <td>{booking.fromDate}</td>
                   <td>{booking.toDate}</td>
                   <td>{booking.price}</td>
                   
                   <td>{booking.carDetails.carModel}</td>
                   <td>{booking.carDetails.carId}</td>
                   <td>{booking.host.hostName}</td>
                   <td>{booking.host.hostContact}</td>
                   <td>{booking.bookingStatus}</td>
                   <td><Link to={`/update/${booking.bookingId}`} className='btn btn-success'>Update</Link></td>
                    
                    <td>
                     <button className='btn btn-danger' onClick={()=>deleteBooking(booking.bookingId)}>Delete</button>
                    </td>
                    
 

                    
                   </tr>)
                   }


           </tbody>
       </table>
 
    </div>
  )
}
export default ListBooking
 