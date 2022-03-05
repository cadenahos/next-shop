import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@templates/Login';
import Home from '@templates/Home';
import NotFound from '@templates/NotFound';
import PasswordRecovery from '@templates/PasswordRecovery';
import SendEmail from '@templates/SendEmail';
import NewPassword from '@templates/NewPassword';
import MyAccount from '@templates/MyAccount';
import CreateAccount from '@templates/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@templates/Orders';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';
import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();
        return (
            <AppContext.Provider value={initialState}>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                                <Route exact path='/' element={<Home/>} />
                                <Route exact path='/login' element={<Login/>} />
                                <Route exact path='/password-recovery' element={<PasswordRecovery/>} />
                                <Route exact path='/send-email' element={<SendEmail/>} />
                                <Route exact path='/new-password' element={<NewPassword/>} />
                                <Route exact path='/account' element={<MyAccount/>} />
                                <Route exact path='/signup' element={<CreateAccount/>} />
                                <Route exact path='/checkout' element={<Checkout/>} />
                                <Route exact path='/orders' element={<Orders/>} />
                                <Route path='*' element={<NotFound/>} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </AppContext.Provider>
        );
}

export default App;