import React from 'react'
import MainNavigationBar from './MainNavigationBar';

import classes from './Layout.module.css';


const Layout = ( {children} ) => { //destruction
    return (
        <div>
             <MainNavigationBar />
             <main className={classes.main}>
             {children}
             </main>
        </div>
    )
}

export default Layout
