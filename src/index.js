import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Menu from './Components/MenuBar/Menu';
import Footer from './Components/footer/Footer';
import Body from './Components/bodyStyle/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>HI</h1>
    <Home />
    <Menu/>
    <Body/>
    <App/>
    <Footer/>
  </React.StrictMode>
);


