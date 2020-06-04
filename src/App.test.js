import React from "react";
import { render } from "@testing-library/react";
import * rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});
it('renders a div with text')
