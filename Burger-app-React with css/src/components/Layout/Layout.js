import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

var styles = {
    Content: { marginTop: '16px', color:'red'}
}

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar,Backdrop</div>
        {/* <main className={classes.Content}> */}
        <main style={styles.Content}>
            {/* style={{ marginTop: '16px', color:'red'}} */}
            {props.children}
        </main>
        </Aux>
);
export default layout;