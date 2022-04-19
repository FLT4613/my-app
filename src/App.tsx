import React, { useCallback, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

type Count = {
    [k: string]: number
}

type Item = {
    id: string,
    displayName: string,
    price: number
}

const items: Item[] = [{
    id: "coffee",
    displayName: "コーヒー",
    price: 480
}, {
    id: "tea",
    displayName: "お茶",
    price: 280
}, {
    id: "milk",
    displayName: "ミルク",
    price: 180
}, {
    id: "coke",
    displayName: "コーラ",
    price: 190
}, {
    id: "beer",
    displayName: "ビール",
    price: 580
}]


function App () {
    const [itemsCount, setItemsCount] = useState<Count>(() => Object.fromEntries(items.map(v => [v.id, 0])))
    const setCount = useCallback((key: string, value: number) => {
        setItemsCount({
            ...itemsCount,
            [key]: value,
        })
    }, [itemsCount])

    const totalItemsCount = items.map(v => itemsCount[v.id]).reduce((prev, curr) => prev + curr)
    const totalPrice = items.map(v => v.price * itemsCount[v.id]).reduce((prev, curr) => prev + curr)

    return (
        <div className="App">
            <span data-testid="count">{totalItemsCount}</span>
            <span data-testid="price">{totalPrice}</span>
            {
                items.map(v => <>
                    <div data-testid={`${v.id}-count`}>{itemsCount[v.id]}</div>
                    <Counter id={v.id} name={v.displayName} price={v.price} setCount={(value: number) => setCount(v.id, value)} count={itemsCount[v.id]} />
                </>)
            }
        </div>
    );
}

export default App;
