import React from 'react'
import s from './Video.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


import Menu from '../menu/Menu';


const Video = () => {
    return (
        <div className={s.wrapper}>

            <div className={s.menu}>
                <Menu />
            </div>


            <div className={s.mainBlock}>

                <h1>Видео </h1>

                <div className={s.topListCategory}>
                    <ul>
                        <li><FontAwesomeIcon icon={faSortDown} /> фильмы</li>
                        <li><FontAwesomeIcon icon={faSortDown}/> грамматика</li>
                        <li> <FontAwesomeIcon icon={faSortDown}/>мультики</li>
                        <li> <FontAwesomeIcon icon={faSortDown}/>иное</li>
                    </ul>

                </div>
                
                  
             

                

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>


                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                <div className={s.videoBlock}>
                    <iframe width="100%" height="200px" src="https://www.youtube.com/embed/JPJjwHAIny4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p> описание видео</p>
                </div>

                

            </div>
        </div>
    )
}

export default Video