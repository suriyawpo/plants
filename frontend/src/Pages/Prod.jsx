import React from "react";

const App = ({ prod }) => {
    return (
        <div class="shadow-lg rounded-lg bg-green-600 p-3 relative">
            <div class=" w-full">
                <img
                    src={prod.img}
                    alt=""
                    class=" "
                />
            </div>

            <div class="text-center mt-2">
                {" "}
                <p class="text-white text-xl font-semibold py-2">
                    {" "}
                    {prod.name}
                </p>
                <p class="text-white"></p>
            </div>
        </div>
    );
};

export default App;
