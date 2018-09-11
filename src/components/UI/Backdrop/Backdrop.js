import React from 'react';

import classes from './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null // argument ? if true, do this : if false do this
)

export default backdrop;