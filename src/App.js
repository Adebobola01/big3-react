import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const Explore = lazy(() => import("./pages/Explore"));
const Details = lazy(() => import("./pages/Explore/Details"));
const Profile = lazy(() => import("./pages/Profile"));
const Create = lazy(() => import("./pages/Create"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={
              <Suspense fallback={<Loader/>} >
                <Home />
              </Suspense>
            }/>
            <Route path="/explore" element={
              <Suspense fallback={<Loader/>} >
                <Explore />
              </Suspense>
            }/>
            <Route path='/explore/details' element={
              <Suspense fallback={<Loader/>} >
                <Details/>
              </Suspense>
            } />
            <Route path='/profile' element={
              <Suspense fallback={<Loader/>} >
                <Profile />
              </Suspense>} />
              <Route path='/create' element={
              <Suspense fallback={<Loader/>} >
                <Loader width="100vw" height="100vh" />
              </Suspense>} />
          </Route>   
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
