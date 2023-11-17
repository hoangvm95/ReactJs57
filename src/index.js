import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './Components/Card';
import { AlertComponent } from './Components/AlertComponent';
import HeaderHome from './Components/HeaderHome';
import HomeLayout from './HomeLayout/HomeLayout';
import Databinding from './DataBinding/Databinding';
import './assets/scss/style.scss'
import StyleComponent from './StyleComponent/StyleComponent';
import Handlevent from './HandleEvent/Handlevent';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import ChangeColor from './StateDemo/ChangeColor';
import ChangeAvatar from './StateDemo/ChangeAvatar';
import ChangeCarColor from './StateDemo/ChangeCarColor';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoProps from './Props/DemoProps/DemoProps';
import EXRenderProductList from './Props/EXRenderProductList/EXRenderProductList';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
// import scss ở index (Vì import ở bất kì file nào vãn build ra html.index)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className="abc"> 
{/* <Handlevent/> */}
{/* <ChangeFontSize/> */}
{/* <ChangeColor/> */}
{/* <ChangeAvatar/> */}
{/* <ChangeCarColor/> */}

{/* <RenderWithMap/> */}
{/* <DemoProps/> */}
{/* <EXRenderProductList/> */}
<BaiTapXemChiTiet/>
</div>
); 

