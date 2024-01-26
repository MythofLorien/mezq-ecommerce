import React from 'react';
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
    return (
        <div className="item-list-container">
            <h2 className="greetings">{greetings}</h2>

        </div>
    );
};

export default ItemListContainer;