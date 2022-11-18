import React, { useState, useEffect } from 'react'
import s from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getProfile } from '../../redux/profile-reducer';



import Menu from '../menu/Menu';
import { useDispatch } from 'react-redux';



const Profile = () => {

    const dispatch = useDispatch()

    
    useEffect( () => {
    getProfile(dispatch); 
    
    },[])
     

    const uploadPhoto = (e) => {
        e.preventDefault()

        console.log("photo")
    }


    

    return (
        <div className={s.wrapper}>

            <div className={s.menu}>
                <Menu />
            </div>

            <div className={s.mainBlock}>


                <div className={s.profileblock}>
                    <div className={s.profileImage}>
                        <img src='https://i.pinimg.com/736x/3a/c7/d3/3ac7d38bd4e1dd70eb64cb3bb36c27e1--ulzzang-makeup-korean-beauty.jpg' />


                        <form onSubmit={uploadPhoto}>
                            <input type="file" id="myFile" name="filename" />
                            
                            <button className={s.btn}>загрузить фото </button>
                        </form>
                    </div>

                    <div className={s.profileForm}>
                        <form>
                            <input type='text' placeholder='login' />
                            <input type='text' placeholder='email' />
                            <input type='text' placeholder='insatgram' />
                            <button className={s.btn}> Изменить</button>
                        </form>
                        
                    </div>

                </div>






            </div>
        </div>
    )
}

export default Profile