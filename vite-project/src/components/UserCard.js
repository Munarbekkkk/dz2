import React from "react";

const UserCard = () => {

    return (
        <div style={{width: '300xp', height: '200xp', padding: '16px', marginTop: '30px'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLHz0vltSz4jyrQ5SmjyKiVAF-xjpuoHcCw&s"
                 alt={}/>
                 style={{
                     height: '100px'
        }}
            <h1>{ userInfo.name }</h1>
            <p>{ userInfo.username}</p>
            <p>{ userInfo.email }</p>
        </div>
    )
}