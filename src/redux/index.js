import { combineReducers } from 'redux';
import Customizer from './customizer/reducer';
import Taskapp from './task/reducer';

const reducers = combineReducers({
    Customizer,
    Taskapp
});

export default reducers;