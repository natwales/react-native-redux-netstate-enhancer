import { NetInfo } from 'react-native';

export const ONLINE = 'NETINFO.ONLINE';
export const OFFLINE = 'NETINFO.OFFLINE';
export const UNKNOWN = 'NETINFO.UNKNOWN';

export default () => (createStore) => (...args) => {
  const store = createStore(...args);
  let currentState = UNKNOWN;

  const handleConnectivityChange = (isConnected) => {
    let type;
    if (isConnected) {
      type = ONLINE;
    } else {
      type = OFFLINE;
    }

    if (currentState !== type) {
      store.dispatch({
        type
      });
      currentState = type;
    }
  };

  //let currentState = AppState.currentState;
  NetInfo.isConnected.fetch().then(isConnected => {
    handleConnectivityChange(isConnected);
  });

  NetInfo.isConnected.addEventListener('change', handleConnectivityChange);
  return store;
};
