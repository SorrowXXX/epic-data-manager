import { useEffect, useState } from 'react';

function App() {
    const [schemas, setSchemas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/schemas')
            .then(res => res.json())
            .then(data => setSchemas(data.schemas))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Select Schema</h1>
            <select>
                {schemas.map(schema => (
                    <option key={schema} value={schema}>{schema}</option>
                ))}
            </select>
        </div>
    );
}

export default App;
