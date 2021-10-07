import React, { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context';

import classes from './MainNavigationBar.module.css'

import { Link } from 'react-router-dom'

const MainNavigationBar = () => {
  const favoritesCtx = useContext(FavoritesContext);
    return (
        
            <header className={classes.header}>
            <div className={classes.logo}>React AllMeetups</div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>All Meetups</Link>
                </li>
                <li>
                  <Link to='/new-meetup'>Add New Meetup </Link>
                </li>
                <li>
                  <Link to='/favorites'>
                    My Favorites
                    <span className={classes.badge}>
                      {favoritesCtx.totalFavorites}
                    </span>
                    </Link>
                </li>
                </ul>
            </nav>
            </header>
       
    )
}

export default MainNavigationBar
