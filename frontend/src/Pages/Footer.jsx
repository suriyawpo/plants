import React from "react";
import logo from "./assets/logo3.png";
import { MdEmail,MdAddIcCall } from "react-icons/md";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                <div class="w-full flex justify-between gap-10 flex-col md:flex-row">
                    <div class="flex-1 w-fit mx-auto">
                        <div class="size-20 mx-auto mb-6 ">
                            <img
                                src={
                                    logo
                                }
                                alt=""
                                class=""
                            />
                        </div>
                        <p className="text-lg font-normal mb-4"></p>
                        <p className="text-sm  mb-4">
                            Explore the
                            World with
                            Tourism.
                            Your gateway
                            to
                            unforgettable
                            experiences.
                        </p>
                    </div>
                    <div className="flex flex-col  flex-1  mx-auto">
                        <p class="text-xl text-center font-bold mb-6">
                            Links
                        </p>
                        <div className="flex flex-col w-fit mx-auto">
                        <a
                            href="#"
                            className=" hover:text-yellow-300 mb-3"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white mb-3"
                        >
                            Products
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white mb-3"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white mb-3"
                        >
                            Contact
                        </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  flex-1 text-center">
                        <p class="text-xl font-bold mb-6">
                            Follow us on
                        </p>
                        <div className="text-center w-fit mx-auto">
                        <a
                            href="#"
                            className=" hover:text-white flex items-center mb-3"
                        >
                            <FaFacebook
                                size={
                                    24
                                }
                                className="mr-2"
                            />
                            Facebook
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white flex items-center mb-3"
                        >
                            <FaTwitter
                                size={
                                    24
                                }
                                className="mr-2"
                            />
                            Twitter
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white flex items-center mb-3"
                        >
                            <FaInstagram
                                size={
                                    24
                                }
                                className="mr-2"
                            />
                            Instagram
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white flex items-center mb-3"
                        >
                            <FaLinkedin
                                size={
                                    24
                                }
                                className="mr-2"
                            />
                            LinkedIn
                        </a>
                        
                        </div>
                    </div>
                    <div className="flex-1 mx-auto mb-6">
                        <p className="mb-6 font-bold text-xl">Contact Us On</p>
                        <div className="flex items-center gap-3 mb-3">
                        <MdEmail className="size-6 "/><p className="">7Up@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                        <MdAddIcCall className="size-6"/><p className="">+61-93045672</p>
                        </div>
                        </div>
                </div>
                <p className="text-sm mt-6">
                    &copy; 2024 7Up.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
