

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import createLogger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };

const pReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    return createStore(
        pReducer,
        initialState,
        compose(applyMiddleware(thunk, createLogger))
    );
}

export default store = configureStore();
export const persistor = persistStore(store);



