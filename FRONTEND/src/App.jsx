import React from 'react';
import {Navigate, Route, Routes} from 'react'; // Import necessary components from react-router-dom

function App() {


  return (
    <main>  
      <div> 
        {/* <Routes> // Define routes for the application
          <Route path="/" element={<Navigate to="/home" />} /> // Redirect root path to /home
          <Route path="/home" element={<h1>Home Page</h1>} /> // Home page route
          <Route path="/about" element={<h1>About Page</h1>} /> // About page route
          <Route path="/contact" element={<h1>Contact Page</h1>} /> // Contact page route
          <Route path="*" element={<h1>404 Not Found</h1>} /> // Catch-all route for 404 errors
        </Routes> */}

      </div>
      
    </main>
  )
}

export default App
