import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact,setBtnNameReact]=useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between bg-white-300 shadow-lg">
      <div className="logocontainer">
       
        <img
          className="w-[170px] "
          src={LOGO_URL}
        />
         <div classname="overlay absolute w-full h-full bg-white"></div>
      </div>
      <div className="flex items-center">
        <ul className="flex  m-4 p-4 " >
          <li className="px-4 hover:text-yellow-500 hover:font-bold ">Online Status:{onlineStatus?"🟢":"🔴"}</li>
          <li className="px-4 hover:text-yellow-500 hover:font-bold "><Link to="/">Home</Link></li>
          <li className="px-4 hover:text-yellow-500 hover:font-bold "><Link to="/about">About</Link></li>
          <li className="px-4 hover:text-yellow-500 hover:font-bold "><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 hover:text-yellow-500 hover:font-bold "><Link to="/cart">Cart</Link></li>
          <button className="px-4 hover:text-yellow-500 hover:font-bold " onClick={()=>{
            btnNameReact==="Login"
            ?setBtnNameReact("Logout"):setBtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul> 
      </div>
    </div>
  );
};

export default Header;