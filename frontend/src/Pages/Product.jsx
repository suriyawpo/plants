import React from "react";
import Prod from "./Prod";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";

const App = () => {
    const products = [
        { name: "7up Lemon", img: p1 },
        { name: "7up Cherry", img: p2 },
        {
            name: "7up Lime Soda",
            img: p3
        }
    ];
    return (
        <div class="">
            <div class="container py-12">
                <div class="text-3xl capitalize text-center font-bold">
                    explore the{" "}
                    <span class="text-green-700">
                        Flavours
                    </span>
                </div>
                <p class="pt-6 text-center">
                    Introducing the
                    refreshing taste of
                    7 Up.
                </p>
                <p class="text-center mb-8">
                    {" "}
                    A burst of
                    lemon-lime goodness
                    that's perfect for
                    any occasion.
                </p>
                <div class="flex flex-col md:flex-row gap-8 items-center justify-between mt-6">
                    {products.map(
                        (
                            element,
                            index
                        ) => {
                            return (
                                <Prod
                                    prod={
                                        element
                                    }
                                    class="flex-1 overflow-x-scroll"
                                />
                            );
                        }
                    )}
                </div>
                <div class="text-right mt-4">
                    <button class="rounded-md bg-green-500 text-white px-4 py-2 ">
                        More =>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
