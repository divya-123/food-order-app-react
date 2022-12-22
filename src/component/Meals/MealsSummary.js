import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () =>{
    return(
        <section className={classes.summary}>
            <h2>Delicious food delivery!</h2>
            <p>Choose your favourite meal:</p>
            <p>Experience high quality taste.</p>
        </section>
    );
};

export default MealsSummary;