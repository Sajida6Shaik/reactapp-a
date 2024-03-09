import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/customercar";
 

class CustomerCarServices{
    getAllCustomerCar(){
        return axios.get(BASE_REST_API_URL+"/getallcustomercar")
    }


    addCustomerCar(customercar){
        return (axios.post(BASE_REST_API_URL+"/add/1",customercar))
     }

     getCustomerCarById(id){
      return (axios.get(BASE_REST_API_URL+"/"+id))
   }

  updateCustomerCar(id,customercar){
   return (axios.put(BASE_REST_API_URL+"/"+id,customercar))
  }
 

  deleteCustomerCar(id){
   return (axios.delete(BASE_REST_API_URL+"/"+id))
  }
  




}
 


export default new CustomerCarServices();