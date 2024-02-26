import React from "react";
import img from "./assets/7up.jpeg";
import form from "./assets/form.png";

const App = () => {
    return (
        <div class="bg-green-100 py-12">
            <div class=" ">
                <div class="flex items-center justify-between gap-6 flex-col md:flex-row ">
                    <div class="flex-1  md:ml-40 container">
                        <p class="text-3xl text-green-700 font-bold capitalize">
                            get it any
                            form you
                            want
                        </p>
                        <p class="pt-6 pb-3 text-xl">
                            Available
                            forms Lorem
                            ipsum dolor
                            sit amet,
                            consectetur
                            adipisicing.
                        </p>
                        <div class="">
                            <img
                                src={
                                    form
                                }
                                alt=""
                                class=""
                            />
                        </div>
                    </div>
                    <div class=" bg-green-900 ">
                        <img
                            src={img}
                            alt=""
                            class="rounded-l-4xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
