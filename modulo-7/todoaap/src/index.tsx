import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Entertainment, Music, Sport } from './components';
import { Movies, Shows } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='sport' element={<Sport />} /> {/* /sport */}
          <Route path='music' element={<Music />} /> {/* /music */}
          
          <Route path='entertainment/' element={<Entertainment />}>

            <Route path='movies/'>
              <Route index element={<Movies />} /> {/* /entertainment/movies */}
              <Route path=':title' element={<MovieDetail />} /> {/* /entertainment/movies/the-lion-king */}
            </Route>

            <Route path='shows' element={<Shows />} /> {/* /entertainment/shows */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

