import axios from "axios";
const BASE_REST_API_URL="http://localhost:9192/booking";
 

class BookingServices{
    getAllBookings(){
        return axios.get(BASE_REST_API_URL+"/getallBookings")
    }

    addBooking(booking){
        let cid=1
        let carid=2
        return (axios.post(BASE_REST_API_URL+ `/add/${cid}/${carid}`,booking))
     }

     getBookingById(id){
      return (axios.get(BASE_REST_API_URL+"/"+id))
   }

  updateBooking(id,booking){
   return (axios.put(BASE_REST_API_URL+"/"+id,booking))
  }
 

  deleteBooking(id){
   return (axios.delete(BASE_REST_API_URL+"/"+id))
  }
  
















}
export default new BookingServices();