import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import './index.css';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/showFullItem';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Lk from './components/Lk';
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул минимализм",
          img: "chair.jpg",
          desc: "Черный, минималистичный стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 2,
          title: "Стол ручной работы",
          img: "table2.jpg",
          desc: "Деревянный стол ручной работы",
          category: "tables",
          price: "39.99"
        },
        {
          id: 3,
          title: "Шкаф в спальню",
          img: "wardrobe.jpg",
          desc: "Черный, минималистичный шкаф",
          category: "wardrobes",
          price: "59.99"
        },
        {
          id: 4,
          title: "Дизайнерское кресло",
          img: "chair2.jpg",
          desc: "Дизайнерский стул",
          category: "chairs",
          price: "29.99"
        },
        {
          id: 5,
          title: "Компьютерный стол",
          img: "table.jpg",
          desc: "Черный, минималистичный стол",
          category: "tables",
          price: "39.99"
        },
        {
          id: 6,
          title: "Шкаф из дерева",
          img: "wardrobe2.jpg",
          desc: "Шкаф из натурального дерева",
          category: "wardrobes",
          price: "59.99"
        }
      ],
      showFullItem: false,
      fullItem: {}
    };

    this.state.currentItems = this.state.items;

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Navigation orders={this.state.orders} onDelete={this.deleteOrder} />
          <Routes>
            <Route path="/react-shop-staff" element={
              <>
                <Header />
                <Categories chooseCategory={this.chooseCategory} />
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/LK" element={<Lk />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some(el => el .id === item.id);
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;