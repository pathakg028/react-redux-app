import * as types from './actionTypes';
import * as coursesApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';



export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}


export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
    return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}


export function loadCourses() {

    return function (dispach) {
        dispach(beginApiCall());
        return coursesApi.getCourses().then(course => {
            dispach(loadCourseSuccess(course));
        }).catch(error => {
            dispach(apiCallError(error));
            throw error;

        });
    }
}

export function saveCourse(course) {
    return function (dispach, getState) {
        dispach(beginApiCall)
        return coursesApi.saveCourse(course).then(saveCourse => {
            course.id
                ? dispach(updateCourseSuccess(saveCourse))
                : dispach(createCourseSuccess(saveCourse));
        }).catch(error => {

            dispach(apiCallError(error));
            throw error;
        });
    };
}

export function deleteCourse(course) {
    return function (dispach) {
        dispach(deleteCourseOptimistic(course));
        return coursesApi.deleteCourse(course.id);
    };
}