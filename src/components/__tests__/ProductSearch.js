import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/restaurantListing.json"
import { act } from "react"
import { MemoryRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should check restaurant after searching pizza", async () => {

    await act(async () => {
        render(
        <MemoryRouter>
                <Body />
        </MemoryRouter>
    )
    })
    const search = screen.getByRole("button", {name: "Search"})
    expect(search).toBeInTheDocument()

    const restaurantCardsBefore = screen.getAllByTestId("restaurantCards");
    expect(restaurantCardsBefore.length).toBe(20)

    const searchContainer = screen.getByTestId("searchContainer");

    fireEvent.change(searchContainer, {target: {value: "pizza"}})
    fireEvent.click(screen.getByTestId("searchButton"))

    const restaurantCardsAfter = screen.getAllByTestId("restaurantCards")
    expect(restaurantCardsAfter.length).toBe(2)
})

it("Should check the number of veg restaurants in the list", async () => {
    await act(() => {
        render(
            <MemoryRouter>
                <Body />
            </MemoryRouter>
        )
    })

    const vegRestaurants = screen.getAllByTestId("vegRestaurants")
    
    expect(vegRestaurants.length).toBe(5);
    
})
