import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//导入路由Js
import RouterJs from './router/index'

ReactDOM.render(<RouterJs />,document.getElementById('root'))

 registerServiceWorker();