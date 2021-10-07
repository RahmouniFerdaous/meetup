import { Route, Switch } from 'react-router-dom'

import Layout from './components/layout/Layout.js'
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';




function App() {
  return (

    <Layout> 
    <Switch>
    <Route path='/' exact component={AllMeetupsPage} />
    <Route path='/new-meetup' component={NewMeetupPage} />
    <Route path='/favorites' component={FavoritesPage} />
    </Switch>
    </Layout>
    
  );
}

export default App;
