import React from 'react';
import Navbar from './components/Nav';
import Card from './components/Card'
import { DollarSign, ShoppingCart, Users , TrendingUp} from "lucide-react";


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


const Page = () => {
  return (
    <div>
      <Navbar/>

      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
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


      
    </div>
  )
}

export default Page;
