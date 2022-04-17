import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App () {
    return (
        <div className="App">
            <Counter id="coffee" name="コーヒー" price={480} />
            <Counter id="tea" name="お茶" price={280} />
            <Counter id="milk" name="ミルク" price={180} />
            <Counter id="coke" name="コーラ" price={190} />
            <Counter id="beer" name="ビール" price={580} />
        </div>
    );
}

export default App;
