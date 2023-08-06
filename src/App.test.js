import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingPage from "./pages/BookingPage";

describe("Booking Page", () => {
  test("Checking Booking Page", async () => {
    render(<BookingPage />);

    expect(screen.getByTestId("time")).toBe("");

    const updateTime = await screen.getByTestId("time");
    userEvent.type(updateTime, "18:00");
    expect(screen.getByTestId("time")).toBe("18:00");

    const homeButton = screen.getByTestId("home");
    fireEvent.click(homeButton);
  });
});
