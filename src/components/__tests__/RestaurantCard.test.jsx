import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RestaurantCard, { withDiscountLabel } from "../RestaurantCard";
import mockData from "../mocks/mockData";

describe("RestaurantCard component testing", () => {
    it("Should render a Restaurant card", () => {
        render(<RestaurantCard resData={mockData} />);
        const restroName = screen.getByText("Pizza Hut");
        expect(restroName).toBeInTheDocument();
    });
    it("Should render a Restaurant Card with label", () => {
        // mockData.info.aggregatedDiscountInfoV3.discountTag =
        //     "Discount available";
        const RestaurantCardWithLabel = withDiscountLabel(RestaurantCard);
        render(<RestaurantCardWithLabel resData={mockData} />);
        const restroName = screen.getByText("Discount available");
        expect(restroName).toBeInTheDocument();
    });
});
