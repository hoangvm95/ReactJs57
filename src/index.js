import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet'
import ChangeColor from './StateDemo/ChangeColor';
import Header from './Components/Header';
import HomeTemplate from './Templates/HomeTemplate';
import Login from './Pages/Login';
import UserTemplate from './Templates/UserTemplate';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import ReactForm from './Pages/ReactForm/ReactForm';
import ReactLifecycle from './Pages/ReactLifecycle/ReactLifecycle.jsx';
// import scss ở index (Vì import ở bất kì file nào vãn build ra html.index)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="abc">
        <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path='' element={<HomeTemplate />}>
                    <Route index element={<div>Trang chủ</div>} />
                    <Route path='gio-hang' element={<BaiTapGioHang />} />
                    <Route path='detail' element={<BaiTapXemChiTiet />} />
                    <Route path='change-color' element={<ChangeColor />} />
                    <Route path='login' element={<Login/>} />
                    <Route path='react-form' element={<ReactForm/>} />
                    <Route path='react-life-cycle' element={<ReactLifecycle/>} />
                </Route>
                
                <Route path='user' element={<UserTemplate/>}>
                    <Route index element={<Login/>}/>
                    <Route path='login' element ={<Login/>} />
                    <Route path='register' element={<Register/>}/>
                    <Route path='admin' element={<Admin/>}/>

                    <Route path='*' element={<Navigate to=""/>} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
);

