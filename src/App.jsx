import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HashRouter>
        <Routes>
          <Route path="/" element={
            <div className="p-4">
              <h1 className="text-2xl">Welcome to Uptrovert</h1>
            </div>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;