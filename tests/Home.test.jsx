import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Mocking components to avoid rendering their actual implementations during tests
jest.mock("../app/components/AppLayout", () => {
  const AppLayout = ({ children }) => <div>{children}</div>;
  AppLayout.displayName = "AppLayout";
  return AppLayout;
});
jest.mock("../app/components/Navigation", () => {
  const Navigation = () => <div />;
  Navigation.displayName = "Navigation";
  return Navigation;
});
jest.mock("../app/components/Title", () => {
  const Title = () => <h1>My Title</h1>;
  Title.displayName = "Title";
  return Title;
});
jest.mock("../app/components/Button", () => {
  const Button = () => <div />;
  Button.displayName = "Button";
  return Button;
});
jest.mock("../app/components/Card", () => {
  const Card = () => <div />;
  Card.displayName = "Card";
  return Card;
});
jest.mock("../app/components/Alert", () => {
  const Alert = () => <div />;
  Alert.displayName = "Alert";
  return Alert;
});
jest.mock("../app/components/ProfileCard", () => {
  const ProfileCard = () => <div />;
  ProfileCard.displayName = "ProfileCard";
  return ProfileCard;
});
jest.mock("../app/components/ContactForm", () => {
  const ContactForm = () => <div />;
  ContactForm.displayName = "ContactForm";
  return ContactForm;
});

test("renders home page heading", () => {
  render(<Home />);
  expect(screen.getByText(/my title/i)).toBeInTheDocument();
});
