import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction} from "../redux/actions.js";

const UsersPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersPageReducer.users)
    console.log(users)


    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {user.map(user => <UserCard userInfo={user} />)}
            </div>

        </div>
    )
}

export default UsersPage;