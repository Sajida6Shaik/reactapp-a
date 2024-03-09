import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/customer";
 

class CustomerServices{
    getAllCustomers(){
        return axios.get(BASE_REST_API_URL+"/getallCustomers")
    }

    addCustomer(customer){
        return (axios.post(BASE_REST_API_URL,"/add/1",customer))
     }

     getCustomerById(id){
        return (axios.get(BASE_REST_API_URL+"/"+id))
     }
  
    updateCustomer(id,customer){
     return (axios.put(BASE_REST_API_URL+"/"+id,customer))
    }
   
  
    deleteCustomer(id){
     return (axios.delete(BASE_REST_API_URL+"/"+id))
    }


















}
export default new  CustomerServices();