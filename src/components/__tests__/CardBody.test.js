import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/restaurantDataMock.json"
import CardBody from "../CardBody"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            // return Promise.resolve(data);
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe('doing integration testing of our input-box search feature', () => {

    // it("testing all the RestaurantCards render initially", async () => {
    //     await act(async () => {
    //         render(
    //             <BrowserRouter>
    //                 <CardBody />
    //             </BrowserRouter>
    //         )
    //     })

    //     const cardBeforeSearch = screen.findAllByTestId("resCard");

    //     expect((await cardBeforeSearch).length).toBe(20);
    // })

    it("testing search feature inside our CardBody component", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <CardBody />
                </BrowserRouter>
            )
        })

        const searchBtn = screen.getByRole("button", { name: "Search" });

        expect(searchBtn).toBeInTheDocument();

        // writing onchange event
        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, { target: { value: "burger" } })
        fireEvent.click(searchBtn);

        const cardsAfterSearch = screen.getAllByTestId("resCard")

        expect(cardsAfterSearch.length).toBe(2);
    })
})