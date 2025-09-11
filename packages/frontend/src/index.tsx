import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./components/Hello";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Hello message="Hello" name="Ranjit" isActive={true}></Hello>
        <Hello message="Guten Tag!" name="Stephan" isActive={false}></Hello>

    </React.StrictMode>
);
