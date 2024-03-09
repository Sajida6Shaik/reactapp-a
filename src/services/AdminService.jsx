import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/admin";
let token1= localStorage.getItem(
    "JWT"
 )

class AdminServices{
    getAllAdmins(){
        return axios.get(BASE_REST_API_URL+"/getallAdmins",{
            "headers":{
       
                "Authorization": token1
                }
        })
    }





    addAdmin(admin){
        return (axios.post(BASE_REST_API_URL,"/add/1",admin))
     }

     getAdminById(id){
        return (axios.get(BASE_REST_API_URL+"/"+id))
     }
  
    updateAdmin(id,admin){
     return (axios.put(BASE_REST_API_URL+"/"+id,admin))
    }
   
  
    deleteUser(id){
     return (axios.delete(BASE_REST_API_URL+"/"+id))
    }







}
export default new AdminServices();