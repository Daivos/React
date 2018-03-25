import React, {Component} from 'react' ;

import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';


var styles = {
    BreadBottom: {
        height: '33%',
        width: '80%',
        background: 'linear-gradient(#F08E4A, #e27b36)',
        borderRadius: '0 0 30px 30px',
        boxShadow: 'inset -15px 0 #c15711',
        margin: '2% auto'
    },
    Cheese: {
        width: '90%',
        height: '4.5%',
        margin: '2% auto',
        background: 'linear-gradient(#f4d004, #d6bb22)',
        borderRadius: '20px'
    },
   Salad: {
        width: '85%',
        height: '10%',
        margin: '2% auto',
        background: 'linear-gradient(#228c1d, #91ce50)',
        borderRadius: '20px'
    },
    Meat: {
        width: '80%',
        height: '8%',
        background: 'linear-gradient(#7f3608, #702e05)',
        margin: '2% auto',
        borderRadius: '15px'
    }
}
class BurgerIngredient extends Component {
    render () {
      let ingredient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
            // ingredient =<div className={classes.BreadBottom}></div>
            ingredient=<div style={styles.BreadBottom}></div>
            break;
        // case ('bread-top'):
        //     ingredient =(
        //     <div className={classes.BreadTop}>
        //         <div className = {classes.Seads1}></div>
        //         <div className = {classes.Seads2}></div>
        //     </div>  )
        //       break;
        case ('meat'):
            ingredient =<div style={styles.Meat}></div>  
            break;
        case ('cheese'):
            ingredient =<div style={styles.Cheese}></div>  
            break;
        // case ('bacon'):
        //     ingredient =<div className={classes.Bacon}></div>  
        //     break;
        case ('salad'):
            ingredient =<div style={styles.Salad}></div>  
            break;
        defoult: ingredient=null;
    }
     return ingredient;
    }
}
BurgerIngredient.proptTypes = {
    type:PropTypes.string.isRequared
};

export default BurgerIngredient;