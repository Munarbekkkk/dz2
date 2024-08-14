import {types} from "./types.js";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert("HELLO")
        }, 2000)
    }
}

function getUsersAction(users) {
    return {
        type: types.USERS,
        payload: users
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await  fetch()
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}