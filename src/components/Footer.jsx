import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come Join Us And Hear For The Unexpected Miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2" href="https://mykrypto.online/">
        www.mykrypto.online
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

    <div className="flex justify-center items-center text-white flex-col">
      <div className="flex flex-col md:p-12 py-12 px-4 text-center">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span href="https://www.linkedin.com/in/yash-shrivastava-a116a81b3/" target="_blank">Yash Shrivastava</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/yash-shrivastava-a116a81b3/"
            target="_blank"
          >
            Yash Shrivastava
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
