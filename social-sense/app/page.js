"use client";
import React, { useState } from "react";
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
    MdForwardToInbox, 
  } from "react-icons/md";
  import { IoIosDesktop } from "react-icons/io";
import { AiTwotoneSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";




const Home = () => {
  const [solidColor, setSolidColor] = useState("");
  const [linearGradient, setLinearGradient] = useState("");
  const [radialGradient, setRadialGradient] = useState("");
  const [foregroundColor, setForegroundColor] = useState("bg-white");

  const handleSolidColorClick = (color) => {
    setSolidColor(color);
    setLinearGradient("");
    setRadialGradient("");
  };

  const handleLinearGradientClick = (gradient) => {
    setLinearGradient(gradient);
    setSolidColor("");
    setRadialGradient("");
  };

  const handleRadialGradientClick = (gradient) => {
    setRadialGradient(gradient);
    setSolidColor("");
    setLinearGradient("");
  };

  const handleForegroundColorClick = (color) => {
    setForegroundColor(color);
  };


  return (
    <div className="flex h-screen">
      <div className="w-1/8 bg-gray-100 p-4">
        <div className="text-xl font-bold mb-6">
        <img src="https://adash.io/wp-content/uploads/2021/06/Your-Logo-here.png" width="100px"/></div>
        <nav className="space-y-4">

              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </h3>
              </div>

              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <AiTwotoneSchedule className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  scheducle
                </h3>
              </div>


          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Analytics
                </h3>
              </div>


              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Profile
                </h3>
              </div>


              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdForwardToInbox className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Messages
                </h3>
              </div>

          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <IoIosDesktop className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Theme
                </h3>
              </div>
        </nav>

        
       
        <br/>
        <hr/>

        <div className=" my-4 border-b border-gray-100 pb-4 absolute bottom-6 left-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
      </div>

        </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <div className="flex justify-between items-center mb-7 " >
          <h1 className="text-2xl font-bold mr-20">Themes</h1>
          <div className="flex items-center border-2 bg-gray-250 rounded-md p-1.5">
            <span className="mr-4 " >Kushagra Singh</span>
            <button className="p-4 bg-gray-300 rounded-full"></button>
          </div>
        </div>

        <div className="bg-white p-3 rounded">
          <div
            className="bg-slate-100 border-slate-50 rounded flex justify-between content-center"
            style={{ border: "1px solid black" }}
          >
            <div className="content-center">
              <h1 className="text-xl m-4">Apply a skin to your profile</h1>
            </div>
            <div className="content-center px-4">
              <button className="p-2 bg-gray-300 rounded"> ➕ Custom</button>
              <button className="ml-4 p-2 bg-black text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="bg-white p-4 rounded shadow w-1/8">
            <div className="grid grid-rows-4 gap-1">
              {/* Solids */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Solids</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-8 h-8 bg-black cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-black")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-gray-300 border border-black cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-gray-500")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-yellow-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-yellow-300")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-green-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-green-300")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-blue-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-blue-300")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-pink-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-pink-900")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-purple-300 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-purple-900")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-yellow-200 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-yellow-200")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-red-500 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-red-500")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-pink-500 cursor-pointer"
                    onClick={() => handleSolidColorClick("bg-pink-500")}
                  ></div>

                </div>
              </div>



              {/* Linear Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Linear Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  {/* Add more linear gradient colors as needed */}
                </div>
              </div>

              {/* Radial Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Radial Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-radial from-pink-900 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleRadialGradientClick(
                        "bg-gradient-radial from-pink-900 to-yellow-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-green-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-yellow-300 to-green-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-blue-300 to-purple-300"
                      )
                    }
                  ></div>
                  <div
                    className="w-8 h-8 bg-gradient-to-r from-pink-300 to-yellow-300 cursor-pointer"
                    onClick={() =>
                      handleLinearGradientClick(
                        "bg-gradient-to-r from-pink-300 to-yellow-300"
                      )
                    }
                  ></div>
                  {/* Add more radial gradient colors as needed */}
                </div>
              </div>

              {/* Foreground Color */}
              <div>
                <h3 className="font-semibold mb-2">Foreground Color</h3>
                <div className="flex gap-1">
                  <div
                    className="w-8 h-8 bg-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("bg-black")}
                  ></div>
                  <div
                    className="w-8 h-8 bg-white border border-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("bg-white")}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-3/4">
            <div
              className={`bg-white p-4 rounded shadow ${solidColor} ${linearGradient} ${radialGradient}`}
            >
              <div
                className={`flex items-start mb-4 flex-col p-4 ${foregroundColor}`}
              >
              <div> <img src=""/></div>
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ml-4">
                   <img src="https://i.ibb.co/1r9Hhxs/Whats-App-Image-2024-01-17-at-20-04-51-344e3480.jpg" alt="Profile" /> 
                </div>

                <div className="ml-4">
                  <h1 className={`text-2xl font-bold` }>
                    Mason Parker
                  </h1>
                  <p className={foregroundColor}>Graphics & UI/UX Designer</p>
                  <p className={foregroundColor}>Denver, United States</p>
                </div>
              </div>
              <div className="bg-white border-slate-800 p-4 w-3/4 border-dashed">
                <p>
                  I am a visionary Graphics and UI/UX Designer, seamlessly
                  blending artistic flair with technical expertise. With a
                  degree in Graphic Design, I consistently deliver visually
                  stunning and user-centric solutions, leaving an indelible mark
                  on the digital landscape. As a trusted collaborator, I am
                  dedicated to crafting pixel-perfect UIs and captivating
                  graphics that elevate user experiences.
                </p>
                <p className={`fs-5`}>biography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
