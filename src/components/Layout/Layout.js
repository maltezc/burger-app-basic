import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
    </Aux>
);

export default layout;

// first import React from react.js;
// to get around adjacent jsx elements issue,
// Create Aux component