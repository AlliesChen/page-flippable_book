import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const rootElement = document.getElementById('root');
createRoot(rootElement).render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
//# sourceMappingURL=index.js.map