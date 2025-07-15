import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import UserContext from "../UserContext"
import { MemoryRouter } from "react-router-dom";


it("Should check Login / Logout status", () => {
    render(
        <MemoryRouter>
            <Provider store={appStore}>
                <UserContext.Provider value="User">
                    <Header />
                </UserContext.Provider>
            </Provider>
        </MemoryRouter>
    )

    const login = screen.getByText('Login');

    expect(login).toBeInTheDocument();

    fireEvent.click(login);

    const logout = screen.getByText('Logout');

    expect(logout).toBeInTheDocument();
})

it("Should ensure cart is empty", () => {
    render(
        <MemoryRouter>
            <Provider store={appStore}>
                <UserContext.Provider value="User">
                    <Header />
                </UserContext.Provider>
            </Provider>
        </MemoryRouter>
    )

    const cart = screen.getByText(/Cart/)

    expect(cart).toBeInTheDocument();
})

it("Should ensure user is online", () => {
    render(
        <MemoryRouter>
            <Provider store={appStore}>
                <UserContext.Provider value="User">
                    <Header />
                </UserContext.Provider>
            </Provider>
        </MemoryRouter>
    )

    const isOnline = screen.getByText(/🟢/)
    
    expect(isOnline).toBeInTheDocument()
})