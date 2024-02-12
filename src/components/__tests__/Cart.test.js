import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/restaurantMenuMock.json"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

// describe('testing heading at RestaurantMenu component', () => {
//     it("it should load heading in Restaurant Menu Component using text", async () => {
//         await act(async () => {
//             render(
//                 <BrowserRouter>
//                     <RestaurantMenu />
//                 </BrowserRouter>
//             )
//         })
//         const heading = screen.getByText("Pizza Hut")
//         expect((await heading)).toBeInTheDocument();
//         // console.log(heading)
//     })

//     it("it should load heading Restaurant Menu Component using role", async () => {
//         await act(async () => {
//             render(
//                 <BrowserRouter>
//                     <RestaurantMenu />
//                 </BrowserRouter>
//             )
//         })
//         const heading = screen.getByRole("heading")
//         expect((await heading)).toBeInTheDocument();
//         console.log(heading)
//     })
// })

describe('testing category heading i.e accordian feature', () => {
    // it("clicking on the accordian heading and getting all the items", async () => {
    //     await act(async () => {
    //         render(
    //             <Provider store={appStore}>
    //                 <BrowserRouter>
    //                     <RestaurantMenu />
    //                 </BrowserRouter>
    //             </Provider>
    //         )
    //     })
    //     const accordianHeading = screen.getByText("Garlic Bread (6)")
    //     expect((await accordianHeading)).toBeInTheDocument();

    //     fireEvent.click(accordianHeading)

    //     const foodItems = screen.getAllByTestId("foodItems")
    //     expect(foodItems.length).toBe(6);
    // })

    // it("clicking on add+ button to add items to the cart", async () => {
    //     await act(async () => {
    //         render(
    //             <Provider store={appStore}>
    //                 <BrowserRouter>
    //                     <Header />
    //                     <RestaurantMenu />
    //                 </BrowserRouter>
    //             </Provider>
    //         )
    //     })

    //     const accordianHeading = screen.getByText("Garlic Bread (6)")
    //     expect((await accordianHeading)).toBeInTheDocument();

    //     fireEvent.click(accordianHeading)

    //     const foodItems = screen.getAllByTestId("foodItems")
    //     expect(foodItems.length).toBe(6);

    //     // 1) cannot do this bec we have multiple add+ buttons inside Garlic Bread (6) accordian
    //     // const addBtn = screen.getByRole("button", { name: "add +" })
    //     // expect((await addBtn)).toBeInTheDocument();

    //     // 2) we have to use getAllByRole
    //     const addBtns = screen.getAllByRole("button", { name: "add +" })
    //     expect(addBtns[0]).toBeInTheDocument();
    //     fireEvent.click(addBtns[0])

    //     // 3) checking the cart items ie should be changed on clicking the add+ button
    //     const myCart = screen.getByText("Cart (1 items)");
    //     expect(myCart).toBeInTheDocument();
    // })

    // it("clicking on add+ button to add items to the cart", async () => {
    //     await act(async () => {
    //         render(
    //             <Provider store={appStore}>
    //                 <BrowserRouter>
    //                     <Header />
    //                     <RestaurantMenu />
    //                     <Cart />
    //                 </BrowserRouter>
    //             </Provider>
    //         )
    //     })

    //     const accordianHeading = screen.getByText("Garlic Bread (6)")

    //     fireEvent.click(accordianHeading)

    //     // const foodItems = screen.getAllByTestId("foodItems")

    //     // 2) we have to use getAllByRole
    //     const addBtns = screen.getAllByRole("button", { name: "add +" })
    //     fireEvent.click(addBtns[0])
    //     fireEvent.click(addBtns[1])

    //     // 3) checking items inside Cart component
    //     const foodItems = screen.getAllByTestId("foodItems")
    //     // expect(foodItems.length).toBe(2);
    //     expect(foodItems.length).toBe(8);
    // })

    it("clicking on clear cart button to empty the cart", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Header />
                        <RestaurantMenu />
                        <Cart />
                    </BrowserRouter>
                </Provider>
            )
        })

        const accordianHeading = screen.getByText("Garlic Bread (6)")
        fireEvent.click(accordianHeading)

        // 2) we have to use getAllByRole
        const addBtns = screen.getAllByRole("button", { name: "add +" })
        fireEvent.click(addBtns[0])
        fireEvent.click(addBtns[1])

        // 3) checking items inside Cart component
        // const foodItems = screen.getAllByTestId("foodItems")

        const clearBtn = screen.getByRole("button", { name: "clear cart" })
        expect(clearBtn).toBeInTheDocument();

        fireEvent.click(clearBtn);
        expect(screen.getAllByTestId("foodItems").length).toBe(6);

        expect(screen.getByText("Cart Empty")).toBeInTheDocument();
    })
})
