import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import './index.css';
import Items from './components/Items/Items';
import Categories from './components/Categories/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Lk from './components/Lk/Lk';
import Navigation from './components/Navigation/Navigation';
import { items } from './components/data';

const App = () => {

  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);


  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter(el => el.category === category));
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id));
  };

  const addToOrder = (item) => {
    const isInArray = orders.some(el => el.id === item.id);
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navigation orders={orders} onDelete={deleteOrder} />
        <Routes>
          <Route path="/react-shop-staff" element={
            <>
              <Header />
              <Categories chooseCategory={chooseCategory} />
              <Items items={currentItems} onAdd={addToOrder} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/LK" element={<Lk />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;