import ReactDOM from 'react-dom/client';

import './index.css'; //overall page
import App from './App'; //gets the App.js component 

const root = ReactDOM.createRoot(document.getElementById('root')); // this tells react where the APP component should be placed in the web application
// theres a file in ./public/index.html it has the ID element 'root' meaning :
root.render(<App />); // APP is injected rendered at the root center space. We will really touch the index.hml
