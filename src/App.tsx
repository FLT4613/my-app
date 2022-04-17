import React from 'react';
import './App.css';
import PurchaseButton from './components/PurchaseButton';

function App () {
    return (
        <div className="App">
            <PurchaseButton id="coffee" name="コーヒー" price={480} />
            <PurchaseButton id="tea" name="お茶" price={280} />
            <PurchaseButton id="milk" name="ミルク" price={180} />
            <PurchaseButton id="coke" name="コーラ" price={190} />
            <PurchaseButton id="beer" name="ビール" price={580} />
        </div>
    );
}

export default App;
