// App.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should render app with Routing component when app function is called", () => {
  render(<App />);
  const routingComponent = screen.getByTestId("Login"); // Assuming "Login" is the data-testid of Routing component
  expect(routingComponent).toBeInTheDocument();
});
