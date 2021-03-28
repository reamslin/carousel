import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("should render without crashing", function () {
    render(<Card />)
});

it("should match snapshot", function () {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});