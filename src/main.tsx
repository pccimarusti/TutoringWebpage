import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';

// Get the root element from the HTML file
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the App wrapped with the Redux Provider
root.render(
  <Provider store={store}>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </Provider>
);