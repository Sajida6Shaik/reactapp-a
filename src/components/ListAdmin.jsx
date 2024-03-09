import React ,{useState}from 'react'
import AdminService from '../services/AdminService'
import {useEffect}from 'react'
import{Link,useNavigate}from 'react-router-dom'
const ListAdmin= () => {
   //const [state variable,function that can chnage the state variable]
const[AdminArray,setAdminArray]=useState([])
const navigate=useNavigate();
const deleteAdmin=(id)=>{
  console.log("Delete admin handler fired.Id value received=",id)

  AdminService.deleteAdmin(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllAdmins()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}

const fetchAllAdmins=()=>{
  console.log("fetchAllAdmins fired..")
  AdminService.getAllAdmins().then((response)=>{
    console.log("Response received from API",response.data)

   setAdminArray(response.data);
   console.log("State variable  assigned with response.data")

  })

}



//arrow function and dependency array
useEffect(()=>{
   console.log("UseEffect Hoook Fired.................")
   fetchAllAdmins()
 
     
 
 
   },[])

  return (




    <div className='container'> 
    {console.log("Application Rendered")}
     <h2 className='text-center'>List of AdminData</h2>
     {/* <Link to ="/addcar" className='btn btn-primary'>Add Cars</Link> */}
     <Link to ="/addadmin" className='btn btn-primary'>Add Admin</Link>
       <table className="table table-dark table-striped">
           <thead>
               <tr className='table-danger' >
       
                   <th>AdminId</th>
                   <th>Admin Name</th>
                   <th>Email ID</th>
                   <th>Contact</th>
                   <th>Role</th>
                   <th>Actions</th>
         
                   <th>Delete</th>

               </tr>
           </thead>
           
           <tbody>
           {

            AdminArray.map((admin,key)=>
               // returntype
               <tr key={key}> 
                  
                   <td>{admin.adminId}</td>
                   <td>{admin.adminName}</td>
                   <td>{admin.email}</td>
                   <td>{admin.phoneNo}</td>
                   <td>{admin.user.role}</td>
                   <td><Link to={`/update/${admin.AdminId}`} className='btn btn-success'>Update</Link></td>
                    {/* <td><Link to={`/delete/${employee.id}`} className='btn btn-danger'>Delete</Link></td> */}
<td>
 <button className='btn btn-danger' onClick={()=>deleteAdmin(admin.adminId)}>Delete</button>
</td>

                    
                   </tr>)
                   }


           </tbody>
       </table>
    </div>
  )
}

export default ListAdmin
