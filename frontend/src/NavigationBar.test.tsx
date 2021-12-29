import { render, screen } from "@testing-library/react";
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { MemoryRouter } from "react-router-dom";

describe("NavigationBar component", () => {
  it("should render with navigation items", () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    const createStateNavigation = screen.getByText(/dashboard/i);

    expect(createStateNavigation).toBeInTheDocument();
  });
});
