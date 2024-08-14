import { types} from "../types.js";

const initialState = {
    users: []
}

export default function usersPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERS:
            return {...state, users: action.payload }
        default: return state
    }
}