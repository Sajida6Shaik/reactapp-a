import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/car";

let token= localStorage.getItem(
   "JWT"
)

class CarServices{
    
 

    getAllCars(){
        return axios.get(BASE_REST_API_URL+"/getallcars"
        ,{
            "headers":{
       
        "Authorization": token
            }
        }
        )
    }


    addCar(car){
        return (axios.post(BASE_REST_API_URL+"/add/1",car,{
            "headers":{
                "Authorization": token  
            }
        }))
     }

     getCarById(id){
      return (axios.get(BASE_REST_API_URL+"/"+id))
   }

  updateCar(id,car){
   return (axios.put(BASE_REST_API_URL+"/"+id,car))
  }
 

  deleteCar(id){
   return (axios.delete(BASE_REST_API_URL+"/"+id))
  }
  




}
 


export default new CarServices();