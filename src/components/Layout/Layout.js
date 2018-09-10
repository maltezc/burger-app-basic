import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
    </Aux>
);

export default layout;

// first import React from react.js;
// to get around adjacent jsx elements issue,
// Create Aux component