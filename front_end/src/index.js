import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// 變數宣告
const squads = 8;
const stops = 15;
window.cashPerSquad = Array.from({ length: squads }).fill(0);
window.assetPerStop = Array.from({ length: stops }).fill(0);


ReactDOM.render(<App />, document.getElementById('root'));