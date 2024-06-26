"use client";
import React from 'react';
import Navbar from './components/Nav';
import Card from './components/Card'
import { DollarSign, ShoppingCart, Users , TrendingUp} from "lucide-react";
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';

const demoData = [
  {
    label: "Revenue",
    icon: DollarSign,
    amount: "$12,345",
    discription: "Total revenue for this month",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    amount: "1,234",
    discription: "Total orders this month",
  },
  {
    label: "Customers",
    icon: Users,
    amount: "567",
    discription: "New customers this month",
  },
  {
    label: "Growth",
    icon: TrendingUp,
    amount: "567",
    discription: "New customers this month",
  },

];

const monthData = [
  { month: 'January', sales: 300 },
  { month: 'February', sales: 650 },
  { month: 'March', sales: 600 },
  { month: 'April', sales: 750 },
  { month: 'May', sales: 900 },
  { month: 'June', sales: 750 },
  { month: 'July', sales: 1200 },
  { month: 'August', sales: 1350 },
  { month: 'September', sales: 1500 },
  { month: 'October', sales: 1650 },
  { month: 'November', sales: 1800 },
  { month: 'December', sales: 770 },
];

const ageSegmentData = [
  { segment: '18-24', value: 20 },
  { segment: '25-34', value: 30 },
  { segment: '35-44', value: 25 },
  { segment: '45-54', value: 15 },
  { segment: '55+', value: 10 },
];

const thisYearData = [
  300, 650, 600, 750, 900, 750, 1200, 1350, 1500, 1650, 1800, 1600
];

const lastYearData = [
  200, 300, 650, 500, 505, 430, 1150, 900, 950, 600, 1750, 920
];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Page = () => {
  const data = {
    labels: months,
    thisYearData: thisYearData,
    lastYearData: lastYearData,
  };
  return (
  
  
    <div>
      <Navbar/>

     {/* cards */}
      <div style={{display :'flex' , justifyContent :'space-between' }}>
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4" style={{width :'50%' }}>
      {demoData.map((data, index) => (
        <Card
          key={index}
          label={data.label}
          icon={data.icon}
          amount={data.amount}
          discription={data.discription}
        />
      ))}
    </div>

    
    {/* bar Chart */}
    <div className="max-w-screen-lg mx-auto p-4" style={{width :"50%" }}>
        <BarChart data={monthData} />
      </div>
      </div>


    <div  style={{display :'flex' , justifyContent :'space-between' }}>
       
        {/* Line Chart Section */}
        <div className="max-w-screen-lg mx-auto p-2" style={{width:"50%" , marginLeft :'-20px'}}>
        <LineChart data={data} />
      </div>

     {/* Doughnut Chart Section */}
     <div className="max-w-screen-lg mx-auto p-4" style={{width :"350px" }}>
        <DoughnutChart data={ageSegmentData} />
      </div>

    </div>


  <div>
  
</div>
      
    </div>
  )
}

export default Page;
