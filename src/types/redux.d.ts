declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;