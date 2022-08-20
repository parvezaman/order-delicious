import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>DeliciousMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a table full of delicious food" />
            </div>
        </>
    );
};

export default Header;