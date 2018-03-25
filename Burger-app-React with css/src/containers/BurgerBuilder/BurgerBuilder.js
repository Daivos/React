import  React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES ={
    salad: 0.5,
    meat: 1,
    cheese: 0.8
}
export default  class BurgerBuilder extends Component {
    // constructor (props){
    //     super (props);
    //     this.state={...}
        state ={ 
            ingredients: {
                cheese: 0,           
                meat: 0,
                salad:0,    
            },
            totalPrice:4,
            purchasable: false

        }
        updatePurshaseState (ingredients){
            // const ingredients = {
            //     ...this.state.ingredients
            // };
            const sum = Object.keys(ingredients)
            .map(igKey => {
                 return ingredients[igKey];
            })
            .reduce((sum, el)=>{
                return sum + el;
            }, 0);
            this.setState({purchasable: sum>0});
        }

        addIngredientHandler = (type) =>{
            const oldCount = this.state.ingredients[type];
            const updateCount = oldCount+1;
            const updateIngredients ={
                ...this.state.ingredients
            };
            updateIngredients[type] = updateCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice =oldPrice + priceAddition;
            this.setState({totalPrice: newPrice, ingredients: updateIngredients})
            this.updatePurshaseState(updateIngredients);
            }
        
        removeIngredientHandler = (type) =>{
            const oldCount = this.state.ingredients[type];
            if (oldCount<=0){
            return;
            }
            const updateCount = oldCount-1;
            const updateIngredients ={
                ...this.state.ingredients
            };
            updateIngredients[type] = updateCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice =oldPrice - priceDeduction;
            this.setState({totalPrice: newPrice, ingredients: updateIngredients})
            this.updatePurshaseState(updateIngredients);
        }
    
    render (){
        const disabledInfo={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        // {salad:true, meat:false, ...}
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}/>
            </Aux>
        )
    }
}
