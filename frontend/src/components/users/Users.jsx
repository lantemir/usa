import React, { useState, useEffect } from 'react'
import s from './Users.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { requestUsers } from '../../redux/user-reducer';



import Menu from '../menu/Menu';
import { useDispatch, useSelector } from 'react-redux';



const Users = () => {

    const dispatch = useDispatch();

    const usersStore = useSelector(state => state.userReducerR);
    const{
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress
    } = usersStore

    
    useEffect( () => {
     requestUsers(1,3,dispatch)
    
    },[])
     

  
    const getUsers = (e) => {
        e.preventDefault();

        console.log('getUsers')
        requestUsers(1, 3, dispatch)
    }


    const selectorTest = () => {
        console.log(usersStore)
    }

    

    return (
        <div className={s.wrapper}>

            <div className={s.menu}>
                <Menu />
            </div>

            <div className={s.mainBlock}>


                <h1>Users</h1>
                <button onClick={getUsers}>get users</button>
                <button onClick={selectorTest}>selector Test</button>

                {users.map(item => {
                    <p>{item.username}</p>
                })  }
            
                






            </div>
        </div>
    )
}

export default Users