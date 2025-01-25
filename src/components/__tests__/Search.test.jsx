import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import mockResList from "../mocks/mockResList";

jest.mock("axios");

it("Should render the Body Component with Search", async () => {
    axios.get.mockResolvedValue(mockResList);

    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    expect(searchBtn).toBeInTheDocument();
    expect(screen.getAllByTestId("resCard").length).toBe(3);
});

it("Should render the Body Component with Top Rated Restro", async () => {
    axios.get.mockResolvedValue(mockResList);

    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const topRatedRestroBtn = screen.getByTestId("topRatedRestro");
    fireEvent.click(topRatedRestroBtn);
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(6);
});
