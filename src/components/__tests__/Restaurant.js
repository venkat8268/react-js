import Restaurant from "../Restaurant";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import {act} from "react"
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restaurantView.json";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(MOCK_DATA) 
    })
})

it("Should render Restaurant", async () => {

    await act( async () => {

        render(
        <Provider store={appStore}>
            <MemoryRouter>
                <Header />
                <Restaurant />
            </MemoryRouter>
        </Provider>
    )
    })


    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument()

    const addToCartButtons = screen.getAllByRole("button",{name: "Add"})
    
    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(addToCartButtons[1]);
    fireEvent.click(addToCartButtons[1]);

    const cart = screen.getByText(/(3 items)/);
    console.log(cart);
    
    expect(cart).toBeInTheDocument();
})