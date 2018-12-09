
import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

import store, { persistor } from './store'

import App from '../App';


// 只要用 provider 在外面套一套 所有子组件的属性尽在掌握
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        )
    }
}