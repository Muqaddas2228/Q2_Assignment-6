import Link from "next/link";
import React from "react";


export default function Header(){
    return (

        <div className="w-[1440px] height-[102px]">
            <br />
            <div>
                <img src="images/Group 11.png" alt="image" height="30px" width="70px" className="ml-60"/>
            </div>


            {/*header*/}

            <ul className="flex justify-center gap-8 items-center ml-60 h-[1px] space-x-8">
            <li><Link href="/"></Link>Main</li>
            <li><Link href="/#!">Gallery</Link></li>
            <li><Link href="/#!">Certification</Link></li>
            <li><Link href="/#!">Project</Link></li>
            <li><Link href="/#!">Contact</Link></li>
            </ul>
            </div>
    );
};