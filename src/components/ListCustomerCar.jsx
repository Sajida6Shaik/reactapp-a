import React,{useState} from 'react'
import {useEffect}from 'react'
import CustomerCarServices from '../services/CustomerCarServices'
import{Link,useNavigate}from 'react-router-dom'
export const ListCustomerCar = () => {
//const [state variable,function that can chnage the state variable]
const[CustomerCarArray,setCustomerCarArray]=useState([])

const navigate=useNavigate();

const deleteCustomerCar=(id)=>{
  console.log("Delete customercar handler fired.Id value received=",id)

  CustomerCarServices.deleteCustomerCar(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllCustomerCar()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}

 


const fetchAllCustomerCar=()=>{
  console.log("fetchAllCustomercar fired..")
CustomerCarServices.getAllCustomerCar().then((response)=>{
  console.log("Response received from API",response.data)

 setCustomerCarArray(response.data);
 console.log("State variable  assigned with response.data")



})




}


//arrow function and dependency array

useEffect(()=>{
   console.log("UseEffect Hoook Fired.......")
   fetchAllCustomerCar()
 
 
     
 
 
   },[])


 
  return (
    <div className='container'> 

{console.log("Application Rendered")}
     <h2 className='text-center'>List of CustomerCar Data</h2>
     <Link to ="/addcustomercar" className='btn btn-primary'>Add CustomerCar</Link>

       <table className="table table-dark table-striped">
           <thead>
               <tr className='table-secondary' >
       
                   <th>CustomerCarId</th>
                   <th>CustomerName</th>
                   <th>EmailId</th>
                   <th>CarModel</th>
                   <th> Date</th>
                    
                   <th>Actions</th>
                    <th>Delete</th>
                   

               </tr>
           </thead>
           
           <tbody>
           {

            CustomerCarArray.map((customercar,key)=>
               // returntype
               <tr key={key}> 
                  
                   <td>{customercar.id}</td>
                   <td>{customercar.customer.user.username}</td>
                   <td>{customercar.customer.user.emailId}</td>
                   <td>{customercar.car.carModel}</td>
                   <td>{customercar.date}</td>




                    
                   <td><Link to={`/update/${customercar.id}`} className='btn btn-success'>Update</Link></td>
                    {/* <td><Link to={`/delete/${customer.custId}`} className='btn btn-danger'>Delete</Link></td> */}
<td>
 <button className='btn btn-danger' onClick={()=>deleteCustomerCar(customercar.id)}>Delete</button>
</td> 
                    
                   </tr>)
                   }


           </tbody>
       </table>
 

    </div>
  )
}
export default ListCustomerCar