import React from "react";
import img from "./assets/bgm.png";
import logo from "./assets/logo3.png";

const App = () => {
    return (
        <div class="bg-green-700  relative text-white ">
            <div className="container flex justify-between items-center text-white py-3">
                <div class="size-20">
                    <img
                        src={logo}
                        alt=""
                        class=""
                    />
                </div>
                <div className="space-x-10 hidden font-semibold  md:block ">
                    <a
                        href=""
                        className="hover:text-blue-800"
                    >
                        Home
                    </a>
                    <a
                        href=""
                        className=""
                    >
                        Products
                    </a>
                    <a
                        href=""
                        className=""
                    >
                        About Us
                    </a>
                    <a
                        href=""
                        className="bg-third rounded-md py-2 px-4"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <div class="container flex flex-col md:flex-row items-center justify-between h[500px]">
                <div class="flex-1">
                    <div class=" ">
                        <p class="text-5xl font-bold capitalize">
                            super duper{" "}
                            <span class="text-yellow-400">
                                Refresher
                            </span>
                        </p>
                        <p class="my-6">
                            Lorem ipsum
                            dolor sit
                            amet,
                            consectetur
                            adipisicing
                            elit.
                            Repudiandae
                            quam atque,
                            laborum,
                            eveniet
                            minus vitae
                            dolore
                            repellat,
                            perferendis
                            illo
                            molestias
                            possimus
                            quis
                            expedita.
                        </p>
                        <button class="rounded-md bg-red-500 px-4 py-3">
                            Order Now
                        </button>
                    </div>
                </div>
                <div class="h-full flex-1">
                  
                </div>
            </div>
        </div>
    );
};

export default App;
