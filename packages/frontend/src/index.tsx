import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemForm from "./components/ItemForm";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ItemForm></ItemForm>
    </React.StrictMode>
);
