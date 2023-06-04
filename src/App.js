import React from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

class App extends React.Component {
    constructor () {
      super();
      this.state = {
          products: [
              {
                  price: 999,
                  title: 'Mobile Phone',
                  qty: 2,
                  img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
                  id: 1
              },
              {
                  price: 99,
                  title: 'Watch',
                  qty: 4,
                  img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
                  id: 2
              },
              {
                  price: 9999,
                  title: 'laptop',
                  qty: 1,
                  img: "https://plus.unsplash.com/premium_photo-1681286768130-b9da2bdc6695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal = cartTotal + (product.qty * product.price);
    })
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQty}
          onDecreaseQuantity={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );

  }
}

export default App;
