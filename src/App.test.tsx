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
        test("display '0' after initialization", () => {
            render(<App />)
            expect(screen.getByTestId(id)).toHaveTextContent("0")
        })
    })
})

describe("Step 3", () => {
    describe("count", () => {
        describe("shows total of click count for the button", () => {
            test.each(["coffee", "tea", "milk", "coke", "beer"])("only button %s is clicked", (buttonId) => {
                render(<App />)
                fireEvent.click(screen.getByTestId(buttonId))
                expect(screen.getByTestId("count")).toHaveTextContent("1")
            })
            test("all buttons are clicked once", () => {
                render(<App />)
                fireEvent.click(screen.getByTestId("coffee"))
                fireEvent.click(screen.getByTestId("tea"))
                fireEvent.click(screen.getByTestId("milk"))
                fireEvent.click(screen.getByTestId("coke"))
                fireEvent.click(screen.getByTestId("beer"))
                expect(screen.getByTestId("count")).toHaveTextContent("5")
            })
        })
    })
    describe("price", () => {
        describe("shows total price of items", () => {
            test.each([
                ["coffee", 480],
                ["tea", 280],
                ["milk", 180],
                ["coke", 190],
                ["beer", 580],
            ])("only button %s is clicked", (id, price) => {
                render(<App />)
                fireEvent.click(screen.getByTestId(id))
                expect(screen.getByTestId("price")).toHaveTextContent(price.toString())
            })
            test("all buttons are clicked once", () => {
                const total = 480 + 280 + 180 + 190 + 580
                render(<App />)
                fireEvent.click(screen.getByTestId("coffee"))
                fireEvent.click(screen.getByTestId("tea"))
                fireEvent.click(screen.getByTestId("milk"))
                fireEvent.click(screen.getByTestId("coke"))
                fireEvent.click(screen.getByTestId("beer"))
                expect(screen.getByTestId("price")).toHaveTextContent(total.toString())
            })
        })
    })
})


describe("Step 4", () => {
    // 問題文のpriceの値の計算に誤りがあるため、以下の正例に従う
    // 誤) 480 * 2 + 180 * 1 + 580 * 2 = 1420
    // 正) 480 * 2 + 180 * 1 + 580 * 2 = 2300
    test("works according to the scenario", () => {
        render(<App />)
        fireEvent.click(screen.getByTestId("coffee"))
        fireEvent.click(screen.getByTestId("coffee"))
        fireEvent.click(screen.getByTestId("milk"))
        fireEvent.click(screen.getByTestId("beer"))
        fireEvent.click(screen.getByTestId("beer"))
        expect(screen.getByTestId("count")).toHaveTextContent("5")
        expect(screen.getByTestId("price")).toHaveTextContent("2300")
    })
})
