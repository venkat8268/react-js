import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact"

it("Should contain a form", () => {

    render(<Contact />);
    
    const heading = screen.getAllByRole("heading");

    expect(heading.length).toBe(1);

})

it("Should contain 2 input boxes", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})

it("Should contain a place holder named name", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("name");

    expect(placeholder).toBeTruthy()
})

it("Should contain a submit button", () => {
    render(<Contact />);

    const button = screen.findAllByRole("button");
    console.log(button);
    
    expect(button).toBeTruthy()
})