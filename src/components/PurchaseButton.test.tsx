import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './PurchaseButton'


test("has id can also use for testing", () => {
    render(<Button id="coffee" name="コーヒー" price={180} />)
    expect(screen.getByTestId("coffee")).toContainHTML("button")
})

test("shows name", () => {
    render(<Button id="coffee" name="コーヒー" price={180} />)
    expect(screen.getByTestId("coffee")).toHaveTextContent("コーヒー")
})

test("shows price with '円'", () => {
    render(<Button id="coffee" name="コーヒー" price={180} />)
    expect(screen.getByTestId("coffee")).toHaveTextContent("180円")
})