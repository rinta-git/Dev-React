import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

//unit testing: testing a component alone
describe("contact us page test case", () => {
  test("should load contact us", () => {
    //render
    render(<ContactUs />);
    //querying
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  test("should have an input box with placeholder", () => {
    render(<ContactUs />);
    const result = screen.getByPlaceholderText("username");
    expect(result).toBeInTheDocument();
  });

  test("should have 2 textboxes", () => {
    render(<ContactUs />);
    const result = screen.getAllByRole("textbox");
    expect(result.length).toBe(2);
  });

  test("should have button", () => {
    render(<ContactUs />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});
