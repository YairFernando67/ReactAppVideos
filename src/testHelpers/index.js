import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import { middlewares } from '../createStore';

export const findElement = (comp, attr) => comp.find(`[data-test='${attr}']`);
// eslint-disable-next-line
export const validateProps = (comp, expectedProps) => checkPropTypes(comp.propTypes, expectedProps, 'props', comp.name);

export const mockStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(reducers, initialState);
};
