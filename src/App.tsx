import React, { useCallback, useState } from 'react';
import './App.css';
import ItemButtonWithCounter from './components/ItemButtonWithCounter';
import Total from './components/Total';

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
        <div className="flex h-screen">
            <div className="flex justify-center items-center m-auto w-[28rem] h-[36rem]">
                <div className="flex justify-around items-center w-full h-full">
                    <div className="flex flex-col justify-around align-middle h-1/2 ">
                        {
                            items.map(v => (
                                <ItemButtonWithCounter key={v.id} id={v.id} name={v.displayName} price={v.price} setCount={(value: number) => setCount(v.id, value)} count={itemsCount[v.id]} />
                            ))
                        }
                    </div>
                    <div>
                        <Total numberOfItems={totalItemsCount} price={totalPrice} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
