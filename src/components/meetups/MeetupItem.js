import React, { useContext } from 'react'
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

import FavoritesContext from '../../store/favorites-context'

const MeetupItem = ( {meetup} ) => {
     
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id)

 function toogleFavoriteSatusHandler () {
      if (itemIsFavorite) {
        favoritesCtx.removeFavorite(meetup.id)
      }
      else {
          favoritesCtx.addFavorite({
              id: meetup.id,
              image: meetup.image,
              title : meetup.title,
              address: meetup.address,
              description: meetup.description,
        });
      }
 }
    return (
        <li className={classes.item}>
        <Card>
        <div className={classes.image}>
        <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
        <button onClick={toogleFavoriteSatusHandler}>
            {itemIsFavorite? 'Remove from Favorits' : 'To favorites'}
        </button>
        </div>
        </Card>
        </li>

    )
}

export default MeetupItem
