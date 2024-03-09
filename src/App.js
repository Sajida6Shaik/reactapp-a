import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import ListCarDetails from './components/ListCarDetails';
import ListPayment from './components/ListPayment';
import ListBooking from './components/ListBooking';
import ListCustomers from './components/ListCustomers';
import ListCustomerCar from './components/ListCustomerCar';
import ListRoutes from './components/ListRoutes';
import ListAdmin from './components/ListAdmin';
import ListUser from './components/ListUser';
import ListHost from './components/ListHost';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
 
import { Error } from './components/Error';
import { AddCar } from './components/AddCar';
 
import { AddPayment } from './components/AddPayment';
import { AddCustomer } from './components/AddCustomer';
 
import { AddBooking } from './components/AddBooking';
import { AddRoutes } from './components/AddRoutes';
 
import { AddAdmin } from './components/AddAdmin';
import {AddHost} from './components/AddHost';
import {AddUser} from './components/AddUser';

 

 



function App() {
  //CUSTOMER TOKEN
  let token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZnJpZCIsImlhdCI6MTcwOTk3OTY3NSwiZXhwIjoxNzExMTg5Mjc1fQ.5Kqb5Dm38zAcG5zLZyfhMH_juDUTO72IBcQLPKMBecE"
  localStorage.setItem("JWT",token)
  //ADMIN TOKEN
  let token1="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWppZGEiLCJpYXQiOjE3MTAwMDQzNDYsImV4cCI6MTcxMTIxMzk0Nn0.dfJQA_WgE-YH60pX9mHkKySCmkOJAoEF4orXyNo0O-o"
  localStorage.setItem("JWT",token1)
  
  return (
    <div className="App">


<BrowserRouter>
<Header/>

          <div className='container'>
        <Routes>
           
          <Route path="/getallcars" element={<ListCarDetails/>}/> 
          <Route path="/car" element={<ListCarDetails/>}/> 
          <Route path="*" element={< Error/>}/> 
          <Route path="/addcar" element={< AddCar/>}/> 
          <Route path="/car/update/:id" element={< AddCar/>}/> 



          <Route path="/getallhosts" element={<ListHost/>}/> 
          <Route path="/host" element={<ListHost/>}/> 
          <Route path="/addhost" element={< AddHost/>}/> 
          <Route path="/host/update/:id" element={< AddHost/>}/> 



          <Route path="/getallpayments" element={<ListPayment/>}/> 
          <Route path="/payment" element={<ListPayment/>}/> 
          <Route path="/addpayment" element={< AddPayment/>}/>
          <Route path="/update/:id" element={< AddPayment/>}/> 




          <Route path="/getallbookings" element={<ListBooking/>}/> 
          <Route path="/booking" element={<ListBooking/>}/>
          <Route path="/addbooking" element={< AddBooking/>}/> 
          <Route path="/update/:id" element={< AddBooking/>}/> 


           <Route path="/getallcustomers" element={<ListCustomers/>}/>  
          <Route path="/customer" element={<ListCustomers/>}/> 
          <Route path="/addcustomer" element={< AddCustomer/>}/> 
          <Route path="/update/:id" element={< AddCustomer/>}/> 






          <Route path="/getallroutes" element={<ListRoutes/>}/>  
          <Route path="/routes" element={<ListRoutes/>}/> 
          <Route path="/addroute" element={< AddRoutes/>}/> 
          <Route path="/update/:id" element={< AddRoutes/>}/> 







          <Route path="/getalladmins" element={<ListAdmin/>}/> 
          <Route path="/admin" element={<ListAdmin/>}/> 
          <Route path="/Addadmin" element={< AddAdmin/>}/> 
          <Route path="/update/:id" element={< AddAdmin/>}/>





          <Route path="/getallusers" element={<ListUser/>}/> 
          <Route path="/user" element={<ListUser/>}/> 
          <Route path="/Adduser" element={< AddUser/>}/> 
          <Route path="/update/:id" element={< AddUser/>}/>



          <Route path="/getallcustomercar" element={<ListCustomerCar/>}/> 




        </Routes>


</div>

 
<Footer/>

</BrowserRouter>

 
 

        
    </div>
  );
}

export default App;
