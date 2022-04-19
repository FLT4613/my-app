import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App () {
    const [coffeeCount, setCoffeeCount] = useState(0)
    const [teaCount, setTeaCount] = useState(0)
    const [milkCount, setMilkCount] = useState(0)
    const [coke, setCokeCount] = useState(0)
    const [beerCount, setBeerCount] = useState(0)

    return (
        <div className="App">
            <span data-testid="count">{
                coffeeCount + teaCount + milkCount + coke + beerCount
            }</span>
            <span data-testid="price">{
                coffeeCount * 480 + teaCount * 280 + milkCount * 180 + coke * 190 + beerCount * 580
            }</span>
            <div data-testid={`coffee-count`}>{coffeeCount}</div>
            <div data-testid={`tea-count`}>{teaCount}</div>
            <div data-testid={`milk-count`}>{milkCount}</div>
            <div data-testid={`coke-count`}>{coke}</div>
            <div data-testid={`beer-count`}>{beerCount}</div>
            <Counter id="coffee" name="コーヒー" price={480} setCount={setCoffeeCount} count={coffeeCount} />
            <Counter id="tea" name="お茶" price={280} setCount={setTeaCount} count={teaCount} />
            <Counter id="milk" name="ミルク" price={180} setCount={setMilkCount} count={milkCount} />
            <Counter id="coke" name="コーラ" price={190} setCount={setCokeCount} count={coke} />
            <Counter id="beer" name="ビール" price={580} setCount={setBeerCount} count={beerCount} />
        </div>
    );
}

export default App;
