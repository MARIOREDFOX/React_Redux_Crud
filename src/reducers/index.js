import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';
import { reducer as featureReducer } from './feature';
import { reducer as allTasksReducer } from './allTasks';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    features: featureReducer,
    allTasks: allTasksReducer
});

export default rootReducer;
