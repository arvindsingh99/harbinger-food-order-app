import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'
import './Header.css';

function header() {
    return (
        <Fragment>
            <header className="header">
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className="main-image">
            <img src={mealsImage} alt="A table with lot of food items" />
        </div>
    </Fragment >
  )
}

export default header