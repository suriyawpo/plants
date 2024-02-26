import React from "react";
import img from "./assets/bg4.png";
import logo from "./assets/logo3.png";

const App = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`
            }}
            className="relative  bg-right bg-cover font-prime"
        >
            {" "}
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
                        className="border-2 rounded-md py-2 px-4"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <div class="container text-white flex flex-col md:flex-row items-center justify-between h-[500px]">
                <div class="md:w-1/2">
                    <div class=" ">
                        <p class="text-5xl font-bold capitalize">
                            super duper{" "}
                            <span class="text-yellow-400">
                                Refresher
                            </span>
                        </p>
                        <p class="my-8">
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
                        <button class="rounded-md bg-white text-green-600 px-4 py-3">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
