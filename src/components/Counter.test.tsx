import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter'


test("has test-id with suffix '-id'", () => {
    render(<Counter id="coffee" value={1} />)
    expect(screen.getByTestId("coffee-count")).toBeTruthy()
})


test.each([1, 11])("can display '%d'", (value) => {
    render(<Counter id="coffee" value={value} />)
    expect(screen.getByTestId("coffee-count")).toHaveTextContent(value.toString())
})
