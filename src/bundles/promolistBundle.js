import React from 'react';
import { render } from 'react-dom';
import { PromolistPage } from '../pages';

if (window)
  render(
    <PromolistPage data={window.__DATA__} />,
    document.getElementById('app')
  );
