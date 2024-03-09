import React, { useState,useEffect} from 'react'
import CarServices from '../services/CarServices'
import { Link,useParams,useNavigate } from 'react-router-dom'


export const AddCar = () => {
   const[carModel,setCarModel]=useState('')
   const[price,setPrice]=useState('')
   const[mileage,setMileage]=useState('')
   const[fuelType,setFuelType]=useState('')
   const[color,setColor]=useState('')
   const[seating,setSeating]=useState('')
   const[insurance,setInsurance]=useState('')
   const[location,setLocation]=useState('')
   // const[availability,setAvailability]=useState('')
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update car.Id value from url: ",{id})
return <h2 className="text-center "> UpdateCar</h2>
}
else{
 console.log("returned Title Add car.Id value from url:",{id})

return <h2 className="text-center "> AddCar</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     CarServices.getCarById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setCarModel(response.data.carModel);
       setPrice(response.data.price);
       setMileage(response.data.mileage);
       setFuelType(response.data.fuelType);
       setColor(response.data.color);
       setSeating(response.data.seating);
       setInsurance(response.data.insurance);
       setLocation(response.data.location);
      //  setAvailability(response.data.availability);                           

       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{ carModel,price,mileage,fuelType,color,seating,insurance,location}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdateCar=(e)=>
   { e.preventDefault();
      
       const car={ carModel,price,mileage,fuelType,color,seating,insurance,location }
       console.log("Car object received form form:",car);
if(id){
 //update logic
 CarServices.updateCar(id,car).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/car')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
     car.availability=true

     CarServices.addCar(car).
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
           {/* 1.CarModel text box */}
                 <div className='form-group mb-2'>
                 <label className ='form-label'>Car Model</label>
                 <input type="text" placeholder="Enter your car Model" name="car Model"
                  value={ carModel} className='form-control'
               onChange={(e) => {setCarModel(e.target.value)}}
                    /></div>

 {/*2. price text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>Price</label>
                 <input type="text" placeholder="Enter your price" name="price"
                  value={ price} className='form-control'
               onChange={(e) => {setPrice(e.target.value)}}
                    /></div>


{/*3. Mileage text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Mileage</label>
                 <input type="text" placeholder="Enter your mileage" name="mileage"
                  value={mileage} className='form-control'
               onChange={(e) => {setMileage(e.target.value)}}
                    /></div>



{/*4. Fuel text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>FuelType</label>
                 <input type="text" placeholder="Enter your FuelType" name="fuelType"
                  value={ fuelType} className='form-control'
               onChange={(e) => {setFuelType(e.target.value)}}
                    /></div>



 {/* 5.Color text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>Color</label>
                 <input type="text" placeholder="Enter your color" name="color"
                  value={ color} className='form-control'
               onChange={(e) => {setColor(e.target.value)}}
                    /></div>




 {/* 6.Seating text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>Seating</label>
                 <input type="text" placeholder="Enter your Seating" name="Seating"
                  value={ seating} className='form-control'
               onChange={(e) => {setSeating(e.target.value)}}
                    /></div>



 {/* 7.Insurance text box */}
 <div className='form-group mb-2' >
                 <label className ='form-label'>Insurance</label>
                 {/* <input type="text" placeholder="Enter your Insurance" name="Insurance"
                  value={ insurance} className='form-control'
               onChange={(e) => {setInsurance(e.target.value)}}
                    />   */}
                    <select
                      className="form-select"
                      id="insurance"
                      onChange={(e) => setInsurance(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="true">Yes</option>
                      <option value="false"> No</option>
                    </select>  
                    </div>

 

            
{/*location text box */}
<div className='form-group mb-2'>
                 <label className ='form-label'>Location</label>
                 <input type="text" placeholder="Enter your location" name="location"
                  value={location} className='form-control'
               onChange={(e) => {setLocation(e.target.value)}}
                    /></div>
            
{/* availability text box
<div className='form-group mb-2'>
                 <label className ='form-label'> Availability</label>
                 <input type="text" placeholder="Enter your availability" name="availability"
                  value={availability} className='form-control'
               onChange={(e) => {setAvailability(e.target.value)}}
                    /></div> */}

{/* submit button */}


<button onClick={(e)=>saveOrUpdateCar(e)} className='btn btn-success'>Save Car</button>
&nbsp;&nbsp;
<Link to="/car" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               </form>

           </div>

       </div>

        </div>
  
  )
}
