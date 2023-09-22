import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../__mocks__/restaurentList.json";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search for text ice cream", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCards");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "ice cream" } });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCards");
  expect(cardsAfterSearch.length).toBe(3);
});

it("should filter top rated restaurents", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const restaurantList = screen.getAllByTestId("resCards");
  expect(restaurantList.length).toBe(20);

  const topRatedFilterBtn = screen.getByRole("button", {name: "Top Rated Restaurents"});
  fireEvent.click(topRatedFilterBtn);

  const filteredRestaurent = screen.getAllByTestId("resCards");
  expect(filteredRestaurent.length).toBe(18)
});
