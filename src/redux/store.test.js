import { createStore } from 'redux';
import rootReducer from './reducers/index';
import initialState from './reducers/initialState';
import * as  courseActions from './actions/courseActions';

it('should handle creating courses', function () {
    // arrange 
    const store = createStore(rootReducer, initialState);
    const course = {
        title: "Clean Code "
    };

    //act 
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const createCourse = store.getState().courses[0];
    expect(createCourse).toEqual(course);
})