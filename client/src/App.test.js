import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import PlayerCard from './components/PlayerCard';

test('renders without crashing', () => {
  render(<App/>)
});

test('renders without crashing', () => {
  render(<Navbar />)
});


test('renders without crashing', () => {
  const { getByText } = render(<App />);
  getByText(/popularity/i)
});
