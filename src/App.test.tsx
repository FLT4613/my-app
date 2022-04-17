import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("Step 1", () => {
    test("the number of buttons is 5", () => {
        render(<App />)
        expect(screen.getAllByRole("button")).toHaveLength(5)
    })
    describe.each([
        ["coffee", "コーヒー", "480円"],
        ["tea", "お茶", "280円"],
        ["milk", "ミルク", "180円"],
        ["coke", "コーラ", "190円"],
        ["beer", "ビール", "580円"],
    ])("button %s exists with a label '%s %s'", (id, name, price) => {
        test("includes name", () => {
            render(<App />)
            expect(screen.getByTestId(id)).toHaveTextContent(name)
        })
        test("includes price", () => {
            render(<App />)
            expect(screen.getByTestId(id)).toHaveTextContent(price)
        })
    })
})


describe("Step 2", () => {
    const table = [
        ["coffee-count", "coffee"],
        ["tea-count", "tea"],
        ["milk-count", "milk"],
        ["coke-count", "coke"],
        ["beer-count", "beer"],
    ]
    describe.each(table)("counter %s", (id, buttonId) => {
        test(`links to only the '${buttonId}' button`, () => {
            render(<App />)
            fireEvent.click(screen.getByTestId(buttonId))
            expect(screen.getByTestId(id)).toHaveTextContent("1")
            const otherCounterNumbers = table.map(v => screen.getByTestId(v[0]).innerText)
            expect(1).not.toContain(otherCounterNumbers)
        })
    })
})