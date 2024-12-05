import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className='item'>
         <img 
              src={require(`../img/${this.props.item.img}`)} 
              alt={this.props.item.img} 
              onClick={() => this.props.onShowItem(this.props.item)} 
          />
        <div className='coffee'>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>buy</div>
        </div>
      </div> 
    );
  }
}

export default Item;