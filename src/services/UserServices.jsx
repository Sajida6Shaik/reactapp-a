import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/user";
 

class UserServices{
    getAllUsers(){
        return axios.get(BASE_REST_API_URL+"/getallusers")
    }
    addUser(user){
        return (axios.post(BASE_REST_API_URL,"/add/1",user))
     }

     getUserById(id){
        return (axios.get(BASE_REST_API_URL+"/"+id))
     }
  
    updateUser(id,user){
     return (axios.put(BASE_REST_API_URL+"/"+id,user))
    }
   
  
    deleteUser(id){
     return (axios.delete(BASE_REST_API_URL+"/"+id))
    }
}
export default new UserServices();