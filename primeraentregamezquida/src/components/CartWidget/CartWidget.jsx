import React from 'react'

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <span>Cart: {itemCount}</span>
        </div>
    )
}

export default CartWidget