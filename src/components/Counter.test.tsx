import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter'

test("has a button and a display", () => {
    render(<Counter id="coffee" name="コーヒー" price={180} />)
    expect(screen.getByTestId("coffee")).toBeTruthy()
    expect(screen.getByTestId("coffee-count")).toBeTruthy()
})

test("display '0' after initialization", () => {
    render(<Counter id="coffee" name="コーヒー" price={180} />)
    expect(screen.getByTestId("coffee-count")).toHaveTextContent("0")
})

test("count up when the button is pressed", async () => {
    render(<Counter id="coffee" name="コーヒー" price={180} />)
    fireEvent.click(screen.getByTestId("coffee"))
    expect(screen.getByTestId("coffee-count")).toHaveTextContent("1")
    fireEvent.click(screen.getByTestId("coffee"))
    expect(screen.getByTestId("coffee-count")).toHaveTextContent("2")
})
