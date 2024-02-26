import React from "react";
import img from "./assets/7up.jpeg";
import form from "./assets/form.png";

const App = () => {
    return (
        <div class="bg-green-50 ">
            <div class=" py-12 ">
                <div class="flex items-center justify-between gap-6 flex-col md:flex-row ">
                    <div class="flex-1  md:ml-40 container">
                        <p class="text-3xl text-green-500 font-bold capitalize">
                            get it any
                            form you
                            want
                        </p>
                        <p class="pt-6 pb-3 text-xl">
                            Available
                            forms
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
                    <div class=" bg-green-900">
                        <img
                            src={img}
                            alt=""
                            class=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
