import React, { useState,useEffect} from 'react'
import PaymentServices from '../services/PaymentServices'
import { Link,useParams,useNavigate } from 'react-router-dom'
 

export const AddPayment= () => {
   const[paymentType,setPaymentType]=useState('')
   const[paymentPrice,setPaymentPrice]=useState('')
    
   const navigate=useNavigate()
   const {id}=useParams()
   const changeTitle=()=>{
if(id){

console.log("returned Title update payment.Id value from url: ",{id})
return <h2 className="text-center "> Update Payment</h2>
}
else{
 console.log("returned Title Add payment.Id value from url:",{id})

return <h2 className="text-center "> Add Payment</h2>
}}

 useEffect(()=>{
     console.log("useEffect triggered")
     console.log("Id value obtained from url using useParams()",id)
     // for updation
     if(id){
      
     PaymentServices.getPaymentById(id).
     then((response)=>{
       console.log("Response received from API",
       JSON.stringify(response.data))
       setPaymentType(response.data.paymentType);
       setPaymentPrice(response.data.paymentPrice);
       
       console.log("State variables changed")
       console.log(" changed State variables ")
       console.log(" changed State vars ",{ paymentType,paymentPrice}) 
     
     }).catch(error=>{
       console.log("Error received from Api..",error)
     })
   }

   },[])

   const saveOrUpdatePayment=(e)=>
   { e.preventDefault();
      
       const payment={ paymentType,paymentPrice }
       console.log("Payment object received form form:",payment);
if(id){
 //update logic
 PaymentServices.updatePayment(id,payment).
 then((response)=>{console.log("Response received from put api..."
 + JSON.stringify(response.data))
 navigate('/payment')
}).
 catch(error=>{
   console.log("error received from save api..",error)});
 }

//save logic

else{

 
      

     PaymentServices.addPayment(payment).
     then((response)=>{console.log("Response received from save api..."
     + JSON.stringify(response.data))
      }).
     catch(error=>{
       console.log("error received from save api..",error)
      });
     }
}
   
  
  return (

    <div className='container mt-2 mb-5 '>


       <div className='card col-md-6 offset-md-3'>



           {/* <h2 className="text-center "> AddEmployee</h2> */}
              {changeTitle()}
           <div className='card-body'>



           <select className="form-select" aria-label="Default select example">
  <option>Select Your Payment Type</option>
  <option value="1">GooglePay</option>
  <option value="2">PhonePay</option>
  <option value="3">PayPal</option>
  <option value="4">AmazonPay</option>
  <option value="5">Paytm</option>
</select>
 








          
                 
{/* <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  GooglePay
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
   PhonePay
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault3">
   PayPal
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault4">
   AmazonPay
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
  <label className="form-check-label" htmlFor="flexRadioDefault5">
   Paytm
  </label>
</div>

 */}









 {/*2. price text box */}
 <div className='form-group mb-2'>
                 <label className ='form-label'>Payment Price</label>
                 <input type="text" placeholder="Enter your payment price" name="payment price"
                  value={ paymentPrice} className='form-control'
               onChange={(e) => {setPaymentPrice(e.target.value)}}
                    /></div>

 
<button onClick={(e)=>saveOrUpdatePayment(e)} className='btn btn-success'>Save Payment</button>
&nbsp;&nbsp;
<Link to="/payment" className='btn btn-danger'>Cancel</Link>&nbsp;&nbsp;

               

           </div>

       </div>

        </div>
  
  )
}
