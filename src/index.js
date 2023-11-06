import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './Components/Card';
import { AlertComponent } from './Components/AlertComponent';
import HeaderHome from './Components/HeaderHome';
import HomeLayout from './HomeLayout/HomeLayout';
import Databinding from './DataBinding/Databinding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className="abc"> 
<HomeLayout/>
<Databinding />
</div>
);

