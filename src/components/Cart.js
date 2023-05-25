import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 2,
                    img: "",
                    id: 1
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 4,
                    img: "",
                    id: 2
                },
                {
                    price: 9999,
                    title: 'laptop',
                    qty: 1,
                    img: "",
                    id: 3
                }    
            ]
        }
    }
    handleIncreaseQty = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products:products
        })
    }

    handleDecreaseQty = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 1){
            console.log(product.id);
            this.handleDeleteProduct(product.id);
            return;
        }
        else{
            products[index].qty-=1;
        }
        this.setState({
            products:products
        })
    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
    }


    render() {
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQty}
                            onDecreaseQuantity={this.handleDecreaseQty}
                            onDeleteProduct={this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cart;