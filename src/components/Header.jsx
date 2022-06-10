import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { motion } from "framer-motion";

//Images
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

import { app } from "../firebase/firebase";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="items-center justify-between hidden w-full h-full md:flex">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="object-cover w-8" alt="logo" />
          <p className="text-xl font-bold text-headingColor"> City</p>
        </Link>

        <ul className="flex items-center gap-24 ">
          <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            Home
          </li>
          <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            Menu
          </li>
          <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            About Us
          </li>
          <li className="text-lg transition-all duration-100 ease-in-out cursor-pointer text-textColor hover:text-headingColor">
            Service
          </li>
        </ul>

        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-2xl cursor-pointer text-textColor" />
          <div className="absolute flex items-center justify-center w-5 h-5 rounded-full -top-2 -right-2 bg-cartNumBg">
            <p className="text-xs font-semibold text-white">2</p>
          </div>
        </div>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
            referrerPolicy="no-referrer"
          />
          <div className="absolute right-0 flex flex-col w-40 rounded-lg shadow-xl bg-gray-50 top-12">
            {user && user.email === "russelroy15@gmail.com" && (
              <Link to={"/createItem"}>
                <p
                  className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
                  onClick={() => setIsMenu(false)}
                >
                  New Item <MdAdd />
                </p>
              </Link>
            )}
            <p
              className="flex items-center gap-3 px-4 py-2 text-base transition-all duration-100 ease-in-out cursor-pointer hover:bg-slate-100 text-textColor"
              // onClick={logout}
            >
              Logout <MdLogout />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
