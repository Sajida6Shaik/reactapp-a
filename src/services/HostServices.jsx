import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/host";
 

class HostServices{
    getAllHosts(){
        return axios.get(BASE_REST_API_URL+"/getallHosts")
    }
    addHost(host){
        return (axios.post(BASE_REST_API_URL,"/add/1",host))
     }

     getHostById(id){
        return (axios.get(BASE_REST_API_URL+"/"+id))
     }
  
    updateHost(id,host){
     return (axios.put(BASE_REST_API_URL+"/"+id,host))
    }
   
  
    deleteHost(id){
     return (axios.delete(BASE_REST_API_URL+"/"+id))
    }

 

}
export default new HostServices();