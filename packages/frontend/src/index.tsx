import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./components/Hello";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Hello></Hello>
    </React.StrictMode>
);
