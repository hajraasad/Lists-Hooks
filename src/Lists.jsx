import React, { useState } from 'react';
function Parent() {
    const [usersList1, setUsersList1] = useState([
        { id: 1, name: 'User1', color: 'black' },
        { id: 2, name: 'User2', color: 'black' },
        { id: 3, name: 'User3', color: 'black' },
        { id: 4, name: 'User4', color: 'black' },
        { id: 5, name: 'User5', color: 'black' },
    ]);

    const [usersList2, setUsersList2] = useState([]);

    const toggleUserColor = (user, userList) => {
    //if the user id clicked matches to u , changes in color and returned
        return userList.map(u => {
            if (u.id === user.id) {
                const updatedUser = { ...u }; //deep copy so updated points to same

                if (user.color === 'green') {
                    updatedUser.color = 'black';
                } else {
                    updatedUser.color = 'green';
                }
                return updatedUser;

            } else {
                return u;
            }
        });
    };


    const passDataToOtherList1 = (sourceList, targetList) => {
        const selectedUsers = sourceList.filter((user) => user.color === 'green');
        const updatedSourceList = sourceList.filter((user) => user.color === 'black');

        setUsersList1(updatedSourceList);
        setUsersList2([...targetList, ...selectedUsers]);
    };

    const passDataToOtherList2 = (sourceList, targetList) => {
        const selectedUsers = sourceList.filter((user) => user.color === 'black');
        const updatedSourceList = sourceList.filter((user) => user.color === 'green');

        setUsersList1(selectedUsers);
        setUsersList2([...targetList, ...updatedSourceList]);
    };
    return (
        <div>
            <h2>Users List 1</h2>
            <ul>
                {usersList1.map((user) => (
                    <li key={user.id}>
                        <a href="#" onClick={() => setUsersList1(toggleUserColor(user, usersList1))}>
                            <span style={{ color: user.color }}>{user.name}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={() => passDataToOtherList1(usersList1, usersList2)}>Pass Data</button>
                <button onClick={() => passDataToOtherList2(usersList2, usersList1)}>Retrieve Data</button>
            </div>

            <h2>Users List 2</h2>
            <ul>
                {usersList2.map((user) => (
                    <li key={user.id}>
                        <a href="#" onClick={() => setUsersList2(toggleUserColor(user, usersList2))}>
                            <span style={{ color: user.color }}>{user.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Parent;
