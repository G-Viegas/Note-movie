import { Routes, Route } from 'react-router-dom';

import { CreateMovie } from '../pages/CreateMovie';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { MoviePreview } from '../pages/MoviePreview';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createmovie' element={<CreateMovie />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/moviePreview' element={<MoviePreview />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  );
}
