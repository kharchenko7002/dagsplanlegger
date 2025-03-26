import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './css/main.css';

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App />);



//const root = ReactDOMClient.createRoot(document.getElementById('app'));
//root.render(<App />);


//ReactDOMClient.createRoot(document.getElementId('app1')) Это новый метод из React 18, который создаёт корневой узел для React-приложения.
