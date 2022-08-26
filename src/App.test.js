import { render, screen} from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import App from './App';
import React from "react";
import ReactDOM from 'react-dom';
import {Scp3} from "./components/Pages/scp3";
import {Scp4} from "./components/Pages/scp4";
import {Scp5} from "./components/Pages/scp5";
import {Scp6} from "./components/Pages/scp6";


it('renders correctly', () => {
  const div = document.createElement('h1');
  ReactDOM.render(<Scp3 />, div);
});

it('renders correctly', () => {
  const div = document.createElement('h1');
  ReactDOM.render(<Scp4 />, div);
});
it('renders correctly', () => {
  const div = document.createElement('h1');
  ReactDOM.render(<Scp5 />, div);
});
it('renders correctly', () => {
  const div = document.createElement('h1');
  ReactDOM.render(<Scp6 />, div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><App/></Router>);
  expect(history.location.pathname).toEqual('/');
});

test('should render home page', () => {
  const history = createMemoryHistory();

  render(<Router history={history}><App/></Router>);

  expect(history.location.pathname).toEqual('/');
});
