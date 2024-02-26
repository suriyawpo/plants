import React from "react";
import img from "./assets/fid.jpeg";

const App = () => {
    return (
        <div class="">
            <div class="container py-12">
                <div class="flex  items-center justify-between flex-col md:flex-row bg-green-200">
                    <div class="flex-1 p-6">
                        <p class="text-3xl font-bold text-green-700">
                            Drink It
                            Straight Up
                        </p>{" "}
                        <p class="text-xl my-3">
                            Time to
                            chill out
                        </p>
                        <p class="">
                            Lorem ipsum
                            dolor sit
                            amet,
                            consectetur
                            adipisicing
                            elit.
                            Aperiam
                            adipisci
                            doloribus
                            blanditiis
                            mollitia.
                        </p>
                    </div>
                    <div class=" bg-yellow-200">
                        <img
                            src={img}
                            alt=""
                            class="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
