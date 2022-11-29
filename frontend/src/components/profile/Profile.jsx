import React, { useState, useEffect } from 'react'
import s from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getProfile, updateProfile, uploadProfilePhoto  } from '../../redux/profile-reducer';
import Menu from '../menu/Menu';
import { useDispatch, useSelector } from 'react-redux';



const Profile = () => {

    const [usernameState, setusernameState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [cover, setCover] = useState('')
    


    const dispatch = useDispatch();

    const profileStore = useSelector(state => state.profileReducerR);
    const {
        avatar,
        email,
        username
    } = profileStore.profile

    

    
    useEffect( () => {
    getProfile(dispatch); 
    console.log(username)   
    
    },[])

    useEffect( () => {
        setusernameState(username)     
        setEmailState(email)
        // setCover(cover)
        
    },[username,email])
     

    const uploadPhoto = (e) => {
        e.preventDefault()

        const uploadData = new FormData();
        uploadData.append('cover', cover, cover.name);

        uploadProfilePhoto(uploadData, dispatch);
        

        console.log("photo")
    }

    const OnupdateProfile = (e) => {
        e.preventDefault();


        console.log("updateProfile")
        updateProfile(emailState, dispatch)

    }


    const getUseSelector = (e) => {
        e.preventDefault();
        
        console.log(usernameState)
    }

    return (
        <div className={s.wrapper}>

            <div className={s.menu}>
                <Menu />
            </div>

            <div className={s.mainBlock}>


                <div className={s.profileblock}>
                    <div className={s.profileImage}>
                        {/* <img src={avatar[0].avatar ? avatar[0].avatar : '/media/avatars/ava.jpg' } /> */}
                        <img src='/media/avatars/ava.jpg'  />


                        <form onSubmit={uploadPhoto}>
                            <input onChange={(evt) => setCover(evt.target.files[0])} type="file" id="myFile" name="filename" />
                            
                            <button className={s.btn}>загрузить фото </button>
                        </form>
                    </div>

                    <div className={s.profileForm}>
                        <form onSubmit={OnupdateProfile}>
                            <label>Логин</label>
                            <input type='text' onChange={(e)=>{setusernameState(e.target.value)}} value={usernameState} readOnly={false} />
                            
                            <label>Email</label>
                            <input type='text' onChange={(e)=>{setEmailState(e.target.value)}} value={emailState} placeholder='email' />
                            
                            <button className={s.btn}> Изменить</button>
                        </form>
                        
                    </div>

                    <button onClick={getUseSelector}>useSelector</button>

                </div>






            </div>
        </div>
    )
}

export default Profile