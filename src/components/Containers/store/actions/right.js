import * as Types from '../types'
export const setTitle = value => {
    return dispatch => dispatch({ type: Types.SET_TITLE_BREADCRUMBS, payload: value })
}