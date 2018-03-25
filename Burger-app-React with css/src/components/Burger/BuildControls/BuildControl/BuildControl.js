import React from 'react';


var styles= {
    BuildControl:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5px 0'
    },
    button :{
    display: 'block',
    font: 'inherit',
    padding: '5px',
    margin: '0 5px',
    width: '80px',
    border: '1px solid #AA6817',
    outline: 'none',
    cursor: 'pointer'
    }
}

const buildControl = (props) =>(
<div style={styles.BuildControl}>
    <div>{props.label}</div>
    <button 
    style={styles.button} 
    onClick={props.removed} 
    disabled={props.disabled} >Less</button>
    <button style={styles.button} onClick={props.added}>More</button>
</div>
);
export default buildControl;