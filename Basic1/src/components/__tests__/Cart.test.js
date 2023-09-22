import { fireEvent, render, screen } from "@testing-library/react";
import Restaurent from "../Restaurent";
import MOCK_DATA from "../__mocks__/restaurentMenuMockData.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../store";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
describe("should list menu and add items to cart", () => {
  it("should open accordian of Bowl", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <Restaurent />
        </Provider>
      )
    );

    const accordian = screen.getByText("Bowl (2)");
    fireEvent.click(accordian);
  });

  it("should have two items in the bowl accordian", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <Restaurent />
        </Provider>
      );
    });

    const accordian = screen.getByText("Bowl (2)");
    fireEvent.click(accordian);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(2);
  });

  it("should update header and cart components", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <Restaurent />
            <Cart />
          </BrowserRouter>
        </Provider>
      );
    });

    const accordian = screen.getByText("Bowl (2)");
    fireEvent.click(accordian);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(2);

    const cartTxt = screen.getByText("Cart");
    expect(cartTxt).toBeInTheDocument();

    const addBtns = screen.getAllByText("ADD +");
    fireEvent.click(addBtns[0]);

    const cartItemsCount = screen.getByTestId("cartItems").textContent;
    expect(cartItemsCount).toBe("1");

    fireEvent.click(addBtns[0]);

    const cartItemsCount2 = screen.getByTestId("cartItems").textContent;
    expect(cartItemsCount2).toBe("2");

    const foodItemsWithCart = screen.getAllByTestId("foodItems");
    expect(foodItemsWithCart.length).toBe(4);

    const clearBtn = screen.getByText("Clear Cart");
    fireEvent.click(clearBtn);

    const foodItemsAfterClearingCart = screen.getAllByTestId("foodItems");
    expect(foodItemsAfterClearingCart.length).toBe(2);

    expect(screen.getByText("Your cart is empty :(")).toBeInTheDocument();
  });
});
