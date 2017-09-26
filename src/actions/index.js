import * as API from '../utils/api'
import * as actionTypes from './actionTypes';

export const getCategories = () => (dispatch) => 
    API.getAllCategories()
        .then(categories => dispatch(getCategoriesSuccess(categories)))
        .catch(error => {
            throw (error);
        });
    
export const getCategoriesSuccess = (categories) => ({
    type: actionTypes.LOAD_CATEGORIES_SUCCESS,
    categories
});
