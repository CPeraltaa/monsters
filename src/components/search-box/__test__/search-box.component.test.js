import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { SearchBox } from "../search-box.component";

//import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  //create a container
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  //clean components
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders without crashing", () => {
  act(() => {
    render(<SearchBox placeholder="Holis"></SearchBox>, container);
  });
});

/*it("Renders text instead of searchbox", () => {
  act(() => {
    //<h1>toFail</h1>
    render(<SearchBox placeholder="holis" />, container);
  });
  expect(container.textContent).toBe("toFail");
});*/
