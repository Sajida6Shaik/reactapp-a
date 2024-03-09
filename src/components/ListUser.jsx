import React ,{useState}from 'react'
import UserServices from '../services/UserServices'
import {useEffect}from 'react'
import{Link,useNavigate}from 'react-router-dom'

const ListUser= () => {
   //const [state variable,function that can change the state variable]
const[userArray,setUserArray]=useState([])
const navigate=useNavigate();


const deleteUser=(id)=>{
  console.log("Delete user handler fired.Id value received=",id)

  UserServices.deleteUser(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllUsers()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}

const fetchAllUsers=()=>{
  console.log("fetchAllUsers fired..")
  UserServices.getAllUsers().then((response)=>{
    console.log("Response received from API",response.data)

   setUserArray(response.data);
   console.log("State variable  assigned with response.data")


  })

}

 
//arrow function and dependency array
useEffect(()=>{
  console.log("UseEffect Hoook Fired.......")
  fetchAllUsers()

  
 
   },[])

  return (




    <div className='container'> 
    {console.log("Application Rendered")}
     <h2 className='text-center'>List of User Details</h2>
     <Link to ="/adduser" className='btn btn-primary'>Add User</Link>

       <table className="table table-dark table-striped">
           <thead>
               <tr className='table-secondary' >
       
                   <th>UserId</th>
                   <th>Email ID</th>
                   <th>UserName</th>
                   <th>Role</th>
                   <th>Actions</th>
                   <th>Delete</th>

                   

               </tr>
           </thead>
           
           <tbody>
           {

            userArray.map((user,key)=>
               // returntype
               <tr key={key}> 
                  
                   <td>{user.id}</td>
                   <td>{user.emailId}</td>
                   <td>{user.username}</td>
                   <td>{user.role}</td>
 
                   <td><Link to={`/update/${user.userId}`} className='btn btn-success'>Update</Link></td>
                    
                    <td>
                     <button className='btn btn-danger' onClick={()=>deleteUser(user.userId)}>Delete</button>
                    </td>
                    
                   </tr>)
                   }


           </tbody>
       </table>
    </div>
  )
}

export default ListUser
