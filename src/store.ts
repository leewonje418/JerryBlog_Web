import { createStore, compose, applyMiddleware, Middleware, Dispatch, AnyAction, EmptyObject, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { BrowserHistory, createBrowserHistory, State } from 'history'
import { routerMiddleware, RouterState } from 'connected-react-router' 

import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history: any = createBrowserHistory(); 

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const initialState = {};

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] = [sagaMiddleware, routerMiddleware(history)];

const composeEnhancer = process.env.NODE_ENV === 'production' ? compose : devtools || compose;

const store: Store<EmptyObject & {router: RouterState<unknown>;}, AnyAction> = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga);

export default store;
