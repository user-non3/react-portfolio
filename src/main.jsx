import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './container/Root'
import './stylesheet/stylesheet.css'
import CreateLayout from './layout/global'

//


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CreateLayout>
            <Root />
        </CreateLayout>
    </React.StrictMode>,
);
