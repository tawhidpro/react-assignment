import React from 'react';
import './RandomUsers.css'

const RandomUsers = (props) => {
    const {full_name,email,phone,salary,img} = props.users;
    
    return (
        <div className="displayuser">
            <div className="user-info">
            <img src={img} alt="" />
            <h4>Full name: {full_name}</h4>
            <p>Email{email}</p>
            <p>Phone{phone}</p>
            <p>Salary{salary}</p>
            <button onClick={() => props.addUserHandle(props.users)}>Add Friend</button>
            </div>
        </div>
    );
};

export default RandomUsers;