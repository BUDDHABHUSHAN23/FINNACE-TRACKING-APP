import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'; // Import necessary components from react-router-dom
import SignIn from './Pages/auth/sign-in';
import SignUp from './Pages/auth/sign-up';  

function App() {


  return (
    <main>  
      <div> 
        <Routes> // Define routes for the application


          
          <Route path="/sign-in" element={<SignIn />} /> // This are the Sign-in route 
          <Route path="/sign-up" element={<SignUp /> }/> // This is route for sign-up

        </Routes>

      </div>
       
    </main>
  )
}

export default App
