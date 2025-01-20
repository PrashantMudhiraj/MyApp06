import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../Redux/appStore";

jest.mock("../../utils/useOnlineStatus", () => jest.fn());

import useOnlineStatus from "../../utils/useOnlineStatus";

describe("Header Component Test", () => {
    it("Should render Header Component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", { name: "Login" });
        const cartItem = screen.getByText(/Cart/);
        // const loginButton = screen.getByText("Login");
        expect(loginButton).toBeInTheDocument();
        expect(cartItem).toBeInTheDocument();
    });
    it("Should change Login button to Logout onClick", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole("button", { name: "Login" });

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "Logout" });

        expect(logoutButton).toBeInTheDocument();
    });
    it("Should change onlineStatus  to offline where there is no network Connection", () => {
        useOnlineStatus.mockReturnValue(false);
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const onlineStatus = screen.getByText("Online Status : 🔴");
        expect(onlineStatus).toBeInTheDocument();
    });
    it("Should change onlineStatus  to online where there is  network Connection is Up", () => {
        useOnlineStatus.mockReturnValue(true);
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const onlineStatus = screen.getByText("Online Status : 🟢");
        expect(onlineStatus).toBeInTheDocument();
    });
});
