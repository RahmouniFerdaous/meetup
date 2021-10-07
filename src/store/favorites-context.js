import { createContext, useState } from 'react';  // similar to Redux
//FavoritesContext is a an object who created a react component
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider (props) {

 const [userFavorites, setUserFavorites] = useState([])

   function addFavoriteHandler (favoriteMeetup) {
    setUserFavorites( (prevUserFavorites) => {
        return prevUserFavorites.concat(favoriteMeetup) //return an array + new item
    });
 }
 function removeFavoriteHandler (meetupId) {
    setUserFavorites( (prevUserFavorites) => {
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId) // return an array without the removed item
    });
 }
 function itemIsFavoriteHandler (meetupId) {
     return userFavorites.some(meetup => meetup.id === meetupId) //return true if meetup is already exist # every 
 }
    const context = {
       favorites: userFavorites,
       totalFavorites: userFavorites.length,
       addFavorite: addFavoriteHandler,
       removeFavorite: removeFavoriteHandler,
       itemIsFavorite: itemIsFavoriteHandler,
    };
 return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
 )
}

export default FavoritesContext;