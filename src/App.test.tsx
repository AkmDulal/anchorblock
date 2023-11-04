import { render, screen } from '@testing-library/react';
import App from "./App";

it("Should have hello world", () => {
    render(<App />) ;
    const message = screen.findByText(/HELLO WORLD/i);
    expect(message).toBeVisible();
} )
