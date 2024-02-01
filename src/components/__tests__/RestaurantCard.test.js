import React from "react"
import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/restaurantCardMock.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard with props data", () => {
    render(<RestaurantCard resdata={MOCK_DATA} />)

    const resName = screen.getByText("Pizza Hut")

    expect(resName).toBeInTheDocument();
})

describe('checking HOC withPromotedLabel', () => {

    it("should render RestaurantCard with promoted label with props data", () => {
        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

        render(<RestaurantCardPromoted resdata={MOCK_DATA} />)

        const resName = screen.getByText("Pizza Hut")

        expect(resName).toBeInTheDocument();
    })

    it("should render RestaurantCard with promoted label with props data", () => {
        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

        render(<RestaurantCardPromoted resdata={MOCK_DATA} />)

        const label = screen.getByText("Promoted")

        expect(label).toBeInTheDocument();
    })

})

