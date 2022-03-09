import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../../redux-crud/src/app/hooks';
import { RootState } from '../../../../redux-crud/src/app/store';
import { addUser, deleteUser, selectUserList, updateUsername } from './userSlice';
// import { RootState } from './app/store';
// import { useAppDispatch, useAppSelector } from './app/hooks';
// import { addUser, selectUserList } from './features/users/userSlice';
import "./user.css"


const User = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [newusername, setNewUserName] = useState("")
    const users = useAppSelector(selectUserList)
    const dispatch = useAppDispatch()

    // const userList = useSelector((state: RootState ) => state.users.value)
    // const dispatchhook = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)

    const handleChangeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => setNewUserName(e.target.value)

    return (
        <div className="App">
            <h1>Redux CRUD</h1>
            <div className="addUser">
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name..." />
                <input type="text" name="username" value={username} placeholder="Username" onChange={handleChangeUser} />
                <button onClick={() => {
                    dispatch(addUser({ id: users[users.length - 1].id + 1, name, username }))
                    setName("")
                    setUsername("")
                }}>Add User</button>
            </div>
            <div className="displayUsers">
                {users.map((user: any) => (
                    <div key={user.id}>
                        <h6>Names: {user.name}</h6>
                        <h6>Username:{user.username}</h6>
                        <input type="text" name="name" onChange={handleChangeNewUser} placeholder="New Username..." />

                        <button onClick={() => {
                            dispatch(updateUsername({ id: user.id, username: newusername}))
                            setNewUserName("")
                        }}>Update User</button>
                        <button onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete User</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User