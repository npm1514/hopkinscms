import React from 'react';
import { render } from 'react-dom';
import { LoginPage } from '../pages';

if (window)
  render(
    <LoginPage data={window.__DATA__} />,
    document.getElementById('app')
  );
