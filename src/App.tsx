import './App.css';
import React, { Suspense, lazy } from 'react';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const Explore = lazy(() => import("./pages/Explore"));
const Details = lazy(() => import("./pages/Explore/Details"));
const Profile = lazy(() => import("./pages/Profile"));
const Create = lazy(() => import("./pages/Create"));
const Listed = lazy(() => import("./pages/Profile/Listed/index"));
const YourNfts = lazy(() => import("./pages/Profile/YourNfts/index"));
const Created = lazy(() => import("./pages/Profile/Created/index"));

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
            <Route path='/explore/details/:contractAddr/:tokenId' element={
              <Suspense fallback={<Loader/>} >
                <Details/>
              </Suspense>
            } />
            <Route path='/profile' element={
              <Suspense fallback={<Loader/>} >
                <Profile />
              </Suspense>
            }>
              <Route path='' index element={
                <Suspense fallback={<Loader/>} >
                  <YourNfts/>
                </Suspense>
              } />
              <Route path='created' element={
                <Suspense fallback={<Loader/>} >
                  <Created/>
                </Suspense>
              } />
              <Route path='listed' element={
                <Suspense fallback={<Loader/>} >
                  <Listed/>
                </Suspense>
              }/>
            </Route>
            <Route path='/create' element={
              <Suspense fallback={<Loader/>} >
                <Create/>
              </Suspense>
            } />
          </Route>   
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
