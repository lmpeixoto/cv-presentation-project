import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container/Container';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Container />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
