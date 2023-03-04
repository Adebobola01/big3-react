import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Explore = lazy(() => import("./pages/Explore"));

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
            <Route path="explore" element={
              <Suspense>
                <Explore />
              </Suspense>
            }/>
          </Route>
          {/* <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/explore'  element={<Layout><Explore/></Layout>} /> */}
          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
