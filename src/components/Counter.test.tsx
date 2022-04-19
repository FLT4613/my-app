import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter'



describe("count up by 1 when the button is pressed", () => {
    test.each(
        [[0, 1], [1, 2]]
    )("%d -> %d", (before, after) => {
        const setCount = jest.fn()
        render(<Counter id="coffee" name="コーヒー" price={180} count={before} setCount={setCount} />)
        fireEvent.click(screen.getByTestId("coffee"))
        expect(setCount).toHaveBeenCalledWith(after)
    })
})
