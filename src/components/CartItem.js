import React from "react";

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }

}

class CartItem extends React.Component {
    render () {
        const {title, price, qty} = this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">    
                    <img alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1665/1665578.png" 
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/659/659892.png" 
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3515/3515498.png" 
                            onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;