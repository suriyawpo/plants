import React from "react";
import img from "./assets/rshm.png";

const App = () => {
    return (
        <div class="bg-green-200 mt-80 md:mt-28">
            <div class="container py-12 ">
                <div class="flex  justify-between gap-6 flex-col md:flex-row ">
                    <div class="flex-1  relative text-center ">
                        <img
                            src={img}
                            alt=""
                            class="absolute left-0 right-0 -bottom-12 h-96 mx-auto"
                        />
                    </div>
                    <div class="flex-1">
                        <p class="capitalize text-2xl font-bold text-green-700 mt-4">
                            feels good
                            to be you
                        </p>
                        <p class="my-3">
                            Lorem ipsum
                            dolor sit
                            amet,
                            consectetur
                            adipisicing
                            elit. Nihil
                            animi
                            temporibus
                            perferendis
                            voluptatem
                            quisquam,
                            inventore
                            nobis,
                            veritatis,
                            numquam
                            ipsum minus
                            expedita et
                            sint
                            doloremque,
                            quaerat!
                            Lorem ipsum
                            dolor sit
                            amet,
                            consectetur
                            adipisicing.
                            Lorem ipsum
                            dolor sit io
                            suscipit
                            laudantium
                            sunt.
                            consectetur.{" "}
                        </p>
                        <button class="rounded-md bg-green-600 text-white px-4 py-2">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
