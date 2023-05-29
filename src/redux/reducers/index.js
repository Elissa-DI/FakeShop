import { combinedReducers } from 'redux';
import { productReducer } from './productReducer';

 const reducers = combineReducers({
    allProducts: productReducer,
 })

 export default reducers;