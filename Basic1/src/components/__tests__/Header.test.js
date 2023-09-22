import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load header", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
});

test("should have login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const btn = screen.getByRole("button", { name: "Login" });
  expect(btn).toBeInTheDocument();
});

test("should change login text to logout after login button clicked", () => {
  //render component
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //get login button
  const btn = screen.getByRole("button", { name: "Login" });
  //click login button
  fireEvent.click(btn);
  //get logout button
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  //assertion
  expect(logoutBtn).toBeInTheDocument();
});
