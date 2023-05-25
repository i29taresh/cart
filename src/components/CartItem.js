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
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ""
        }
    }

    increaseQty = () => {
        
        console.log(this.state);
        // setState Form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });
        // setState form 2
        this.setState((prevState) => {
            return{
                qty: prevState.qty +1,
            }
        })
    }

    decreaseQty = () => {
        console.log(this.state);
        this.setState((prevState) => {
            return{
                qty: prevState.qty - 1
            }
        })
    }
    render () {
        const {title, price, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">    
                    <img style={styles.image} />
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
                            onClick={this.increaseQty.bind(this)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/659/659892.png" 
                            onClick={this.decreaseQty.bind(this)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3515/3515498.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;