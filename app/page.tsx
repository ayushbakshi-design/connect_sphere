"use client";

// import { createContext, useState } from "react";
// import Link from "next/link";
// import Sidebar from "./components/sidebar";
import Heading from "./components/Home/Heading";
import InputBox from "./components/Home/InputBox";
import UserArray from '../public/MOCK_DATA.json'
import Profile from "./components/Profile";

 

// export const testingContext = createContext("");

export default function Home() {


  return (
    <>
      <Heading />

       <InputBox />


      {UserArray.forEach(( )=>{
          <Profile />
      })}

      <div>

      </div>
       
    </>
  );
}
