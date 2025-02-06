import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div style={{
      backgroundColor: '#14213D',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px'
    }}>
      <h1>Welcome to Uptrovert</h1>
    </div>
  );
}

export default App;