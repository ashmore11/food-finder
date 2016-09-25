import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import MainHeader from 'components/MainHeader';

import Home from 'containers/Home';
import Places from 'containers/Places';
import NotFound from 'containers/NotFound';

import 'styles/main';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/places" component={Places} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}
