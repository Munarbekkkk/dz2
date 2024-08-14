import React from "react";
import {asyncFunctionAction} from "../../redux/actions.js";

const AboutPage = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={dispatch(asyncFunctionAction())}>after 2 sec</button>
    )
}

export default AboutPage