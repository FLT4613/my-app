import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Step 1", () => {
    test("the number of buttons is 5", () => {
        render(<App />)
        expect(screen.getAllByRole("button")).toHaveLength(5)
    })

    test.each([
        ["coffee", "コーヒー", "480円"],
        ["tea", "お茶", "280円"],
        ["milk", "ミルク", "180円"],
        ["coke", "コーラ", "190円"],
        ["beer", "ビール", "580円"],
    ])("button %s exists with a label '%s %s'", (id, name, price) => {
        render(<App />)
        expect(screen.getByTestId(id)).toHaveTextContent(name)
        expect(screen.getByTestId(id)).toHaveTextContent(price)
    })
})
