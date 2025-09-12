import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemForm from "./components/ItemForm";
import ShowFruites from "./components/ShowFruites";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ItemForm></ItemForm>
        <ShowFruites></ShowFruites>
    </React.StrictMode>
);
