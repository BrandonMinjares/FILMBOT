import React from 'react';
import {Route, HashRouter, Routes} from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import StreamingServices from './components/StreamingServices';
import InitialMoviePreferences from './components/InitialMoviePreferences';

import PrivateRoute from './components/PrivateRoute';
import Movie from './components/Movie';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/movie" element={<Movie/>}/>
            <Route path="/onboarding/streamingservices"
              element={<StreamingServices/>}/>
            <Route path="/onboarding/initialmoviepreferences"
              element={<InitialMoviePreferences/>}/>
            <Route path="/"
              element={
                <PrivateRoute>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
