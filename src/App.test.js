import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/The FE/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("another text on app", () => {
    render(<App />);
    const text = screen.getByText(/Testing CI - push on main/i);
    expect(text).toBeInTheDocument();
  });
});
