import React from 'react';
import ReactDOM from 'react-dom';
import "../lib/styles/index.scss"
import { Button } from '../lib'

ReactDOM.render(
  <React.StrictMode>
    <Button style="primary" label="Hellon"/>
  </React.StrictMode>,
  document.getElementById('root')
);