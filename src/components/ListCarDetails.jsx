 import React ,{useState}from 'react'
 import CarServices from '../services/CarServices'
 import {useEffect}from 'react'
 import{Link,useNavigate}from 'react-router-dom'
 
 import { ToastContainer, toast } from 'react-toastify';
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

 
 
 const ListCarDetails = () => {
    //const [state variable,function that can chnage the state variable]
const[carArray,setCarArray]=useState([])

const navigate=useNavigate();
// Delete Logic

const deleteCar=(id)=>{
  console.log("Delete employee handler fired.Id value received=",id)

  CarServices.deleteCar(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllCars()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}





const fetchAllCars=()=>{
  console.log("fetchAllCars fired..")

  
      CarServices.getAllCars().then((response)=>{
        console.log("Response received from API",response.data)
  
       setCarArray(response.data);
       console.log("State variable  assigned with response.data")
  
      }).catch(error =>{
        console.log("Error in getting all cars",error)
        toast(error.message) 

      })
    }

    //
  //arrow function and dependency array
useEffect(()=>{
  console.log("UseEffect Hook Fired..........")
  fetchAllCars()

  
  
       
  
  
    },[])
 
   return (

 
     <div className='container'> 
     <ToastContainer />
     {/* {console.log("Application Rendered")} */}
      <h2 className='text-center'>List Of CarDetails</h2>
      <Link to ="/addcar" className='btn btn-primary'>Add Car</Link>

        <table className="table table-dark table-striped">
            <thead>
                <tr className='table-primary' >
                    <th>CarId</th>
                    <th>CarModel</th>
                    <th>Price</th>
                    <th>Mileage</th>
                    <th>FuelType</th>
                    <th>Color</th>
                    <th>Seating</th>
                    <th>Insurance</th>
                    <th>Location</th>
                    <th>Availability</th>
                    <th>HostName</th>
                    <th>Actions</th>
                    <th>Delete</th>

                </tr>
            </thead>
            {carArray.length > 0?
            <tbody>
            {

             carArray.map((car,key)=>
                // returntype
                <tr key={key}> 
                   
                    <td>{car.carId}</td>
                    <td>{car.carModel}</td>
                    <td>{car.price}</td> 
                    <td>{car.mileage}</td>
                    <td>{car.fuelType}</td>
                    <td>{car.color}</td>
                    <td>{car.seating}</td>
                    <td>{car.insurance == "true" ? "Yes" : "No"}</td>
                    <td>{car.location}</td>
                    <td>{car.availability ? "Yes" : "No"}</td>
                    <td>{car.host.hostName}</td>
 

                    <td><Link to={`/update/${car.carId}`} className='btn btn-success'>Update</Link></td>
                    <td>
                    <button className='btn btn-danger' onClick={()=>deleteCar(car.carId)}>Delete</button>
                    </td>

                    </tr>)
                    }
            </tbody>
            :
            <tbody>
<tr>
  <td colSpan="13"> No Data To Display
  </td></tr>
            </tbody>
 }
        </table>
     </div>
   )
 }
 
 export default ListCarDetails
