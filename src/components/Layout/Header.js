import mealsImage from '../../assests/meals.jpg'
import React from 'react';
import classes from './Header.module.css'
function Header(props) {
    return <React.Fragment>
        <header className={classes.header}>
            <h1> ReactMeals</h1>
            <button className={classes['cart-button']}>Cart</button>
        </header>
        <div className={classes['meals']}>
            <img src={mealsImage} alt="food table" className={classes['meals-img']}/>
        </div>
    </React.Fragment>
}
export default Header;
