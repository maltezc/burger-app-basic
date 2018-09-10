import React from 'react';


import classes from './Burger.css' // Must run npm eject to import css classes i believe
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;