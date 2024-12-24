import React from "react";
import Header from "./component/header";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function Home() {
    return(
        <><div>

            <header><Header /></header>

            {/*body*/}

            <h1>PROJECT</h1>
            <h2>Lorum</h2>

            <h4 className="border h-[30px] w-[40px] font-bold color-gray"><AiOutlineArrowRight /></h4>
            <h5 className="border h-[30px] w-[40px] font-bold color-gray"><AiOutlineArrowLeft /></h5>


            <h3 className="text-gray-400 font-thin text-2xl">
                <a href="#!"><pre>01  /  02</pre></a></h3>
        </div>
        <div className="parentContainer">
                <div className="imageContainer">

                <button className="border color-white">
                <a href="#!">view project</a>
            </button>

                    <img
                        src="images/Rectangle6.png"
                        alt="profile"
                        height="829px"
                        width="770px">
                    </img>

                </div>
            </div></>



    );
};