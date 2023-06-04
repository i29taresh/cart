import React from 'react';

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

const Navbar = (props) => {
  console.log(props);
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img alt='cart-icon' style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/263/263142.png' />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

export default Navbar;