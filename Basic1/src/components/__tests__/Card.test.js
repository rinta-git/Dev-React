import Card from "../Card";
import MOCK_DATA from "../__mocks__/restaurentMockData.json";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("should load restaurent card", () => {
  render(<Card restaurentDetails={MOCK_DATA} />);
  const resName = screen.getByText("Domino's Pizza");
  expect(resName).toBeInTheDocument();
});
