import react from "react";
import reactDom from 'react-dom';
import {createRoot} from 'react-dom/client'
import App , {khiar,mowz} from './app'
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  tab="home" />);

