import React, { Component } from 'react';

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: "Все товары"
                },
                {
                    key: 'chairs',
                    name: "Стулья"
                },
                {
                    key: 'wardrobes',
                    name: "Шкафы"
                },
                {
                    key: 'tables',
                    name: "Столы"
                }
            ]
        };
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div 
                        key={el.key} 
                        onClick={() => this.props.chooseCategory(el.key)}
                        className='category'
                    >
                        {el.name}
                    </div>
                ))}
            </div>
        );
    }  
}

export default Categories;