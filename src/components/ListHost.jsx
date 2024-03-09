import React ,{useState}from 'react'
import HostServices from '../services/HostServices'
import {useEffect}from 'react'
import{Link,useNavigate}from 'react-router-dom'
const ListHost= () => {
   //const [state variable,function that can chnage the state variable]
const[HostArray,setHostArray]=useState([])

const navigate=useNavigate();
  
const deleteHost=(id)=>{
  console.log("Delete Host handler fired.Id value received=",id)

  HostServices.deleteHost(id).
  then((response)=>
  {console.log("Response received from delete api..."
  + JSON.stringify(response.data))
  fetchAllHosts()
   }).
  catch(error=>{
    console.log("error received from delete api..",error)
   });
}

const fetchAllHosts=()=>{
  console.log("fetchAllHosts fired..")
HostServices.getAllHosts().then((response)=>{
  console.log("Response received from API",response.data)

 setHostArray(response.data);
 console.log("State variable  assigned with response.data")

 



})


}

 //arrow function and dependency array

useEffect(()=>{
   console.log("UseEffect Hoook Fired.............")
   fetchAllHosts()
  },[])
     

  return (
 

    <div className='container'> 
    {console.log("Application Rendered")}
     <h2 className='text-center'>List of HostData</h2>
     {/* <Link to ="/addcar" className='btn btn-primary'>Add Cars</Link> */}

       <table className="table table-dark table-striped">
           <thead>
               <tr className=' table-info' >
       
                   <th>HostId</th>
                   <th>HostEmail</th>
                   <th>HostName</th>
                   <th>HostContact</th>
                   <th>Actions</th>
         
                   <th>Delete</th>

                   

               </tr>
           </thead>
           
           <tbody>
           {

            HostArray.map((host,key)=>
               // returntype
               <tr key={key}> 
                  
                   <td>{host.hostId}</td>
                   <td>{host.hostEmail}</td>
                   <td>{host.hostName}</td>
                   <td>{host.hostContact}</td>
                   <td><Link to={`/update/${host.hostId}`} className='btn btn-success'>Update</Link></td>
                    
<td>
 <button className='btn btn-danger' onClick={()=>deleteHost(host.hostId)}>Delete</button>
</td>

                    
                   </tr>)
                   }


           </tbody>
       </table>
    </div>
  )
}

export default ListHost
