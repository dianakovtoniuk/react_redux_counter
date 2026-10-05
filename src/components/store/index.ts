import { createStore } from 'redux';

interface CounterState {
  counter: number;
  showCounter: boolean;
}

type CounterAction =
  | { type: 'increment' }
  | { type: 'increase'; amount: number }
  | { type: 'decrement' }
  | { type: 'toggle' };

const initialState: CounterState = { counter: 0, showCounter: true };

const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'increase':
      return { ...state, counter: state.counter + action.amount };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'toggle':
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;