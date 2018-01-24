## Synopsis

Easily connect network state (exposed through NetInfo) to your react-native redux store with this enhancer.

## Code Example

**Basic Usage**

```
npm install --save react-native-redux-netstate-enhancer
```

Add the enhancer when you create your redux store
```
import applyNetInfoMiddleware from 'react-native-redux-netstate-enhancer';

const reduxStore = createStore(
  reducers,
  initState,[
    applyNetInfoMiddleware(),
  ]);
```

Dispatched actions can then be used in reducers

```
import { ONLINE, OFFLINE, UNKNOWN } from 'react-native-redux-netstate-enhancer';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UNKNOWN:
      console.log('unknown net state');
      return { ...state, connection: UNKNOWN };
    case ONLINE:
      console.log('online');
      return { ...state, connection: ONLINE };
    case OFFLINE:
      console.log('offline');
      return { ...state, connection: OFFLINE };
    default:
      return state;
  }
};
```
