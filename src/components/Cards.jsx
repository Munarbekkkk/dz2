import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData, userFetchData } from "../redux/usersActions.js";
import one from '../assets/frieren/frieren1.jpg';
import two from '../assets/frieren/frieren2.jpg';
import three from '../assets/frieren/frieren3.jpg';
import four from '../assets/frieren/frieren4.jpg';
import five from '../assets/frieren/frieren5.jpg';
import six from '../assets/frieren/frieren6.jpg';
import seven from '../assets/frieren/frieren7.jpg';
import eight from '../assets/frieren/frieren8.jpg';
import nine from '../assets/frieren/frieren9.jpg';
import ten from '../assets/frieren/frieren10.jpg';

const Cards = () => {
    const imagesPersons = [
        one, two, three, four, five, six, seven, eight, nine, ten
    ];

    const { users, user } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const userData = (id) => {
        dispatch(userFetchData(id));
    };

    console.log(user);

    return (
        <div style={{
            width: '1000px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            margin: '0 auto'
        }}>
            {
                users ? (
                    users.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => userData(item.id)}
                            style={{
                                width: '200px',
                                border: '3px solid black',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px'
                            }}
                        >
                            <span>{item.name}</span>
                            <img style={{marginTop: '20px'}} width='200px'
                                 src={imagesPersons[index % imagesPersons.length]} alt="user"/>

                            <span>{item.username}</span>
                            <h3>{item.id}</h3>
                        </div>
                    ))
                ) : (
                    <span>LOADING...</span>
                )
            }
        </div>
    );
};

export default Cards;
