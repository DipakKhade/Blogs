import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import profimg from "../resources/profimg.png";
const Header = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button bg-white text-black border-none hover:bg-slate-500"
            >
              <GiHamburgerMenu className="text-2xl" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <div className="h-20 flex p-2">
                <div>
                  <Image
                    src={profimg}
                    width={35}
                    alt="img"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-base font-semibold mt-2 ml-2">Dipak Khade</h3>
                <div className="ml-20 mt-1 text-2xl">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  >
                    <RxCross2 className="hover:bg-slate-400 rounded-full cursor-pointer text-4xl p-1" />
                  </label>
                </div>
              </div>

              <div className="mt-8 p-2">
               <ul>
               <h3 className="text-gray-700 font-bold mb-4">BLOG MENU</h3>
                <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">Home</li>
                <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">WebRTC</li>
                <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">Linkedin</li>
                <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">GitHub</li>
                <li className="p-5 rounded-md text-gray-800 font-semibold cursor-pointer hover:bg-slate-400">PortFolio</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
