import {Route, Routes} from 'react-router-dom'

import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return <div>
    <MainNavigation>
      <Routes>
        <Route path='/' exact>
          <AllMeetUpsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Routes>
    </MainNavigation>
  </div>;
}

export default App