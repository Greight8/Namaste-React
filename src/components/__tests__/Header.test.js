import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import appStore from "../../utils/appStore";

// describe('checking login / logout button through diff ways', () => {
//     // it("should Header component render with a login button", () => {
//     //     render(
//     //         <BrowserRouter>
//     //             <Provider store={appStore}>
//     //                 <Header />
//     //             </Provider>
//     //         </BrowserRouter>
//     //     )

//     //     // const loginButton = screen.getByRole("button");
//     //     const loginButton = screen.getByText("login");

//     //     expect(loginButton).toBeInTheDocument()
//     // });

//     // it("should render with a login button if there are multiple buttons in header component", () => {
//     //     render(
//     //         <BrowserRouter>
//     //             <Provider store={appStore}>
//     //                 <Header />
//     //             </Provider>
//     //         </BrowserRouter>
//     //     )

//     //     const loginButton = screen.getByRole("button", { name: "login" });

//     //     expect(loginButton).toBeInTheDocument()
//     // });

//     it("how to check on click functionality - if we click on ", () => {
//         render(
//             <BrowserRouter>
//                 <Provider store={appStore}>
//                     <Header />
//                 </Provider>
//             </BrowserRouter>
//         )

//         const loginButton = screen.getByRole("button", { name: "login" });

//         fireEvent.click(loginButton);

//         const logoutButton = screen.getByRole("button", { name: "logout" });

//         expect(logoutButton).toBeInTheDocument()
//     });
// })


describe('checking cart item through diff ways', () => {
    // it("should render cart - with 0 items", () => {
    //     render(
    //         <BrowserRouter>
    //             <Provider store={appStore}>
    //                 <Header />
    //             </Provider>
    //         </BrowserRouter>
    //     )

    //     const cartItem = screen.getByText("Cart (0 items)");

    //     expect(cartItem).toBeInTheDocument()
    // });

    it("should check if there is even a cart or not - irrespective of 0 or 1 item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        // 1) for this we have to use regex, just write cart
        const cartItem = screen.getByText(/Cart/);

        expect(cartItem).toBeInTheDocument()
    });
})
