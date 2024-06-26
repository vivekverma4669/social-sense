import React from 'react';
import Navbar from './components/Nav';
import Dashboard from './components/Dashboard';

const page = () => {
  return (
    <div>
      <Navbar/>
       {/* // here i want chart and all the stuff */}
      <Dashboard/>


    </div>
  )
}

export default page;
