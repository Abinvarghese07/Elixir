import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import Login from './Login';

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>} ></Route>
            </Routes>
            
        </div>
    );
};

export default Pages;