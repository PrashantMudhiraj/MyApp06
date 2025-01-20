import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Component Test", () => {
    test("Should load contact us component", () => {
        //render
        render(<Contact />);

        //Querying
        const heading = screen.getByRole("heading");
        const button = screen.getByRole("button");
        const buttonText = screen.getByText("Submit");
        const inputName = screen.getByPlaceholderText("name");

        //Assertion
        expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
        expect(inputName).toBeInTheDocument();
    });

    test("should load 2 input boxes on the Contact component", () => {
        render(<Contact />);
        const inputBoxCount = screen.getAllByRole("textbox");
        expect(inputBoxCount.length).toBe(2);
    });
});
