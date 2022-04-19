import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Total from './Total'

describe("Total", () => {
    describe("shows number of items", () => {
        test.each([0, 1, 11])("%d", (value) => {
            render(<Total numberOfItems={value} price={1000} />)
            expect(screen.getByTestId("count")).toHaveTextContent(value.toString())
        })
    })
    describe("shows total price", () => {
        test.each([0, 1, 11])("%d", (value) => {
            render(<Total numberOfItems={1} price={value} />)
            expect(screen.getByTestId("price")).toHaveTextContent(value.toString())
        })
    })
})