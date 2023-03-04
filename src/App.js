import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Explore = lazy(() => import("./pages/Explore"));
const Details = lazy(() => import("./pages/Explore/Details"));

function App() {
  return (
    <div className="App">
      <Suspense >
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={
              <Suspense>
                <Home />
              </Suspense>
            }/>
            <Route path="/explore" element={
              <Suspense>
                <Explore />
              </Suspense>
            }/>
            <Route path='/explore/details' element={
              <Suspense>
                <Details/>
              </Suspense>
            } />
          </Route>          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
