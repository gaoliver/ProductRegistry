import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
}
