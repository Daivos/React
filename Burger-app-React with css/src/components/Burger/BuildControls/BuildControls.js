import React from 'react' ;
import BuildControl from './BuildControl/BuildControl';

var styles ={
    Buildcontrols:{
    width: '100%',
    backgroundColor: '#CF8F2E0',
    display: 'flex',
    flexFlow: 'column',
    alignItem: 'center',
    boxShadow: '0 2px 1 px #ccc',
    margin: 'auto',
    padding: '10px 0'
    }
}
const controls =[
    {label:'Salad', type: 'salad'},
    {label:'Meat', type: 'meat'},
    {label:'Cheese', type: 'cheese'},
];

 const buildControls = (props) =>(
    <div style={styles.Buildcontrols}>
    <p> Current Price:<strong> {props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl =>(
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        type={ctrl.type}
        added={()=>props.ingredientAdded(ctrl.type)}
        removed={()=>props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}/>
    ))}
    <button disabled={!props.purchasable}> ORDER NOW </button>
        </div>
)
export default  buildControls;