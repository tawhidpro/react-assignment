import React from 'react';
import './DisplayAddedUser.css'

const DisplayAddedUser = (props) => {
    const {full_name,email,phone,salary,img} = props.addFriendData;
    console.log(props);
    return (
        <div className="display-added-user">
            <div className="userimg">
                <img src={img} alt="" />
            </div>
            <div className="userdata">
                <h2>Full name: {full_name}</h2>
                <p>Email:{email} </p>
                <p> Phone: {phone} </p>
                <p>Salary: {salary} </p>
            </div>
        </div>
    );
};

export default DisplayAddedUser;