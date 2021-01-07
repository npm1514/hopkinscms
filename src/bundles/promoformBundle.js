import React from 'react';
import { render } from 'react-dom';
import { PromoformPage } from '../pages';

if (window)
  render(
    <PromoformPage data={window.__DATA__} />,
    document.getElementById('app')
  );
