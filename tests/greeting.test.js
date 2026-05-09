import { render, screen } from "@testing-library/react";
import Greeting from "../app/components/Greeting";

test("renders greeting with name", () => {
  render(<Greeting name="Next.js" />);
  expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
});

test("renders greeting with different name", () => {
  render(<Greeting name="Anna" />);
  expect(screen.getByText("Hello, Anna!")).toBeInTheDocument();
});

test("renders as h1 element", () => {
  render(<Greeting name="World" />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toBeInTheDocument();
});
