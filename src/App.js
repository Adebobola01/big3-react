import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Web3 from "web3";
const { ethereum } = window;

const Explore = lazy(() => import("./pages/Explore"));
const Details = lazy(() => import("./pages/Explore/Details"));
const Profile = lazy(() => import("./pages/Profile"));
const Create = lazy(() => import("./pages/Create"));

const web3 = new Web3(Web3.givenProvider);

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
            <Route path='/profile' element={
              <Suspense>
                <Profile />
              </Suspense>} />
              <Route path='/create' element={
              <Suspense>
                <Create />
              </Suspense>} />
          </Route>   
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
