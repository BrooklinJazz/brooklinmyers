import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './store';
import { useSelector } from 'react-redux';
import { selectContributions } from './store/selectors/git';

function App() {
  const contributions = useSelector(selectContributions)
  return (
    <div className="App">
      my contributions {JSON.stringify(contributions)}
    </div>
  );
}

export default App;
