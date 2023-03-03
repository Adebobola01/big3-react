import './App.css';
import Home from './pages';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
