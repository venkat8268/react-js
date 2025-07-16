import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Product, { isVeg } from "../Product"
import RestaurantMock from "../mocks/restaurantData.json" 

it("Should render Restaurant Card component with props", () => {

    render(<Product restaurant={RestaurantMock}/>)

    const title = screen.getByText('NIC Ice Creams');

    expect(title).toBeInTheDocument()

})


it("Should render Veg Higher Order Component", () => {
    const IsVeg = isVeg(Product)

    render(<IsVeg restaurant={RestaurantMock}/>)

    const veg = screen.getByText("🟢")

    expect(veg).toBeInTheDocument();

})

