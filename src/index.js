import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav';
import data from './data';
import Card from './components/Card';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
const card = data.map(item => {
  return (
  <Card
    title={item.title}
    location={item.location}
    googleMapsUrl={item.googleMapsUrl}
    startDate={item.startDate}
    description={item.description}
    imageUrl={item.imageUrl}
  />)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
   {card}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
