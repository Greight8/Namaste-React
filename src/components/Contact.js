import React from "react";

const Contact = () => {
    return <>
        <div className="flex flex-wrap justify-center items-center">
            <h1 className="font-bold text-2xl p-4 m-4">Contact us on Ziggy@gmail.com</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center">
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">submit</button>
            </form>
        </div>
    </>
}

export default Contact;