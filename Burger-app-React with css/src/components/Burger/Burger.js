import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

var styles = {
    Burger: {
        width: '100%',
        margin:'auto',
        height: '250px',
        overflow: 'scroll',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    }
    
    // @media (min-width : 500px) and (min-height: 400px){
    //     .Burger{
    //     width:350px;
    //     height: 300px;
    //     }
    // }
    
    // @media (min-width : 1000px) and (min-height: 700px){
    //     .Burger{
    //     width:700px;
    //     height: 600px;
    //     }
    // }
    
    // @media (min-width : 500px) and (min-height: 401px){
    //     .Burger{
    //     width:450px;
    //     height: 400px;
    //     }
    // }
}

const burger = (props) => {
let transformedIngredients = Object.keys(props.ingredients)
.map(igKey =>{
    return [...Array(props.ingredients[igKey])] .map((_, i)=>{
        return <BurgerIngredient key = {igKey + i} type={igKey} />
    });
})
.reduce((arr, el) =>  {
return arr.concat(el)
},[]);

if (transformedIngredients.length===0){
transformedIngredients=<p> Pasirinkite ingredientus</p>
}
console.log(transformedIngredients);
    return (
    <div style={styles.Burger}>
    {/* <BurgerIngredient type="bread-top"/> */}
    {/* <BurgerIngredient type="salad"/>
    <BurgerIngredient type="cheese"/>
    <BurgerIngredient type="meat"/> */}
    {transformedIngredients}
    <BurgerIngredient type="bread-bottom"/>
     </div>
    );
}
export default burger;