//console.log('Hello world!');

import { store } from './store';
import React from 'react';
import ReactDom from 'react-dom';
//import { Dashboard } from './components/Dashboard';
import { Main } from './components/Main';
//console.log(store.getState());

ReactDom.render(
    <Main />,
    document.getElementById('app')
)