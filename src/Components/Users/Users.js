import React from 'react';
import './Users.css'
import fakedata from '../../fakedata/data.json'
import RandomUsers from '../RandomUsers/RandomUsers';
import { useState } from 'react/cjs/react.development';
import DisplayAddedUser from '../DisplayAddedUser/DisplayAddedUser';
import Salary from '../Salary/Salary';



const Users = () => {
    const[users,setUsers] = useState(fakedata)

    const [friend,setFriend] = useState([]);
    const addUserHandle = (fd) => {
        const addedFriend = [...friend,fd]
        setFriend(addedFriend);
    }

    // console.log(friend);

    const totalIncome = friend.reduce((num, loopFriend) => num + loopFriend.salary ,0);

    console.log(totalIncome);


    


    return (
        <div className="users">
            <div className="users-info">
                {
                    users.map(data => <RandomUsers addUserHandle={addUserHandle} users={data} ></RandomUsers> )
                }
            </div>
            <div className="added-user">
                <h2>Total added: {friend.length} </h2>
                {
                    friend.map(addedFriend => <DisplayAddedUser addFriendData={addedFriend} ></DisplayAddedUser>)
                }
                <h2>total income: {totalIncome} </h2>

            </div>
        </div>
    );
};

export default Users;