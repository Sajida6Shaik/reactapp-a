import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/routes";
 

class  RoutesServices{
    getAllRoutes(){
        return axios.get(BASE_REST_API_URL+"/getallRoutes")
    }
    addRoutes(routes){
        return (axios.post(BASE_REST_API_URL,"/add/1",routes))
     }

     getRoutesById(id){
        return (axios.get(BASE_REST_API_URL+"/"+id))
     }
  
    updateRoutes(id,user){
     return (axios.put(BASE_REST_API_URL+"/"+id,user))
    }
   
  
    deleteRoutes(id){
     return (axios.delete(BASE_REST_API_URL+"/"+id))
    }


}
export default new RoutesServices(); 