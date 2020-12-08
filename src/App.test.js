import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title page", () => {
  render(<App />);
  const textElement = screen.getByText(/Monster Recruitment/i);
  expect(textElement).toBeInTheDocument();
});
