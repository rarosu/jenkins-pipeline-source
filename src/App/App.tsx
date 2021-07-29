import { useState } from 'react';
import Counter from '../Counter';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
            <div style={{ marginTop: '1em' }}>
                <Counter count={count} />
            </div>
        </>
    );
};

export default App;
