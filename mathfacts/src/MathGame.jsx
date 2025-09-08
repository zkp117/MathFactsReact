import React, {useState} from 'react';

const App = () => {
    const [screen, setScreen] = useState('start');
    const operations = {'+': 'Addition', '-': 'Subtraction', 'x': 'Multiplication', '/': 'Division'};
    const [operation, setOperation] = useState('');
    const [maxNumber, setMaxNumber] = useState('');

    return (
    <div className={screen === 'start' ? 'container' : ''}>
        {screen === 'start' && (
            <div>
                <h2>Choose an operation:</h2>
                {Object.entries(operations).map(([symbol, name]) => (
                    <button key={symbol} onClick={() => setOperation(symbol)}>{name}</button>
                    ))}
                    {operation && (
                        <div>
                            <h3>Selected Operation: {operations[operation]}</h3>
                            <label>
                                Max Number:
                                <input type="number" value={maxNumber} onChange={(e) => setMaxNumber(e.target.value)} />
                                </label>
                                <button onClick={() => setScreen('game')}>Start Game</button>
                                </div>
                            )}
                            </div>
                        )}
                        {screen === 'game' && (
                            <div>
                                <h2>Game Screen</h2>
                                {/* Game play component or logic goes here */}
                                <button onClick={() => setScreen('start')}>Back to Start</button>
                                </div>
                            )}
                            </div>
                            );
                        }
