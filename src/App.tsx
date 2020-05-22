import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './store';
import { useSelector } from 'react-redux';
import { selectContributions } from './store/selectors/git';
import styled from "styled-components"
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

function App() {
  const contributions = useSelector(selectContributions)
  return (
    <Container>
      my contributions {JSON.stringify(contributions)}
    </Container>
  );
}

export default App;
