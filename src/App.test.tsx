import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App Layout", () => {
  it("should render memo image", () => {
    render(<App />);

    const memo = screen.queryByRole("img");

    expect(memo).toBeInTheDocument();
  });

  it("should render under construction text", () => {
    render(<App />);

    screen.getByText("My Bucket List is under construction. Come back soon!");
  });
});
