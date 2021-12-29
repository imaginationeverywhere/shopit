import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import initStripe from './utils/stripe'
import { PersistGate } from 'redux-persist/integration/react';

// import store
import store, { persistor } from './store';

// import action
import { getAllProducts, refreshStore } from './actions';

// import routes
import AppRoute from './routes';

// import Utils
import { initFunctions } from './utils';

import LoadingOverlay from './components/features/loading-overlay';
import { Elements } from '@stripe/react-stripe-js';

export function Root() {
    initFunctions();
    store.dispatch(getAllProducts());

    useEffect(() => {
        if (store.getState().modal.current !== 7) {
            store.dispatch(refreshStore(7));
        }
    }, [])

    const stripe = initStripe()
    return (
        <Elements stripe={stripe}>
            <Provider store={store} >
                <PersistGate persistor={persistor} loading={<LoadingOverlay />}>
                    <BrowserRouter basename={'/'} >
                        <AppRoute />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </Elements>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));