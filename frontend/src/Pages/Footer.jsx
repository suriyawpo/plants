import React from "react";
import logo from "./assets/logo3.png";

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
                    <div class="flex-1">
                        <div class="size-20">
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
                    <div className="flex flex-col mb-4 flex-1">
                        <p class="text-lg font-semibold mb-2">
                            Links
                        </p>
                        <a
                            href="#"
                            className=" hover:text-white mb-2"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white mb-2"
                        >
                            Destinations
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white mb-2"
                        >
                            Packages
                        </a>
                        <a
                            href="#"
                            className=" hover:text-white mb-2"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="flex flex-col mb-4 flex-1">
                        <p class="text-lg font-semibold mb-2">
                            Follow us on
                        </p>
                        <a
                            href="#"
                            className=" hover:text-white flex items-center mb-2"
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
                            className=" hover:text-white flex items-center mb-2"
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
                            className=" hover:text-white flex items-center mb-2"
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
                            className=" hover:text-white flex items-center mb-2"
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
                <p className="text-sm">
                    &copy; 2024 Tourism.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
