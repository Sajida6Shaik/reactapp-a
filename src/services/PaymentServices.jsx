import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/payment";
 

class PaymentServices{
    getAllPayments(){
        return axios.get(BASE_REST_API_URL+"/getallpayments")
    }
    addPayment(payment){
        return (axios.post(BASE_REST_API_URL+"/add/1",payment))
     }

     getPaymentById(id){
      return (axios.get(BASE_REST_API_URL+"/"+id))
   }

  updatePayment(id,payment){
   return (axios.put(BASE_REST_API_URL+"/"+id,payment))
  }
 

  deletePayment(id){
   return (axios.delete(BASE_REST_API_URL+"/"+id))
  }
  




}

export default new PaymentServices();