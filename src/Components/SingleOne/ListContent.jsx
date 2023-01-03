import React from 'react'
import { useParams } from "react-router";
import classes from './SingleOne.module.css'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import RoundLoader from '../UI/Loader/RoundLoader';
import Img from '../Img';
const fetchPost = () => {

    const url = `https://api.jsonbin.io/v3/b/63b4278c15ab31599e2b3846`;
    const config = {
        headers: {
            'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
        }
    }
    return fetch(url, config).then((res) => {
        const result = res.json();

        return result;
    });
}
const ListContent = () => {
    // const navigate = useNavigate();
    const params = useParams();
    const { status, data: songs, isFetching, error } = useQuery(['new_year'], fetchPost);
    if (status === 'loading') {
        return <RoundLoader />
    }

    if (status === 'error') {
        return <h1 style={{ backgroundColor: "white", color: "black" }}>Ошибка загрузки {error.message}</h1>
    }
    const currSings = songs.record.filter(songs => songs.id === params.id);

    return (

        currSings.map((currSing) =>
            <div className={classes.mediaSong} key={currSing.id.toString()}>
                <img className={classes.mediaImage} src={currSing.photo} width={80} alt={currSing.name} />
                <div className={classes.headerSong}>
                    <h2>{currSing.name}</h2></div>
                <img className={[classes.tziImage, currSing.picture_tzitata.trim() ? null : classes.mediaHidden].join(' ')} src={currSing.picture_tzitata} width={80} alt="Цитаты" />
                <a className={[classes.linkTo, currSing.linkTo.trim() ? '' : classes.mediaHidden].join(' ')} href={currSing.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                <div className={[
                    classes.audioBlock,
                    currSing.audio1.trim() ? null : classes.mediaHidden].join(' ')}>
                    <p>{currSing.audio_name1}</p>
                    <audio controls className={currSing.audio1.trim() ? null
                        : classes.mediaHidden}
                        src={currSing.audio1} type="audio/mpeg" />
                    <p>{currSing.audio_name2}</p>
                    <audio controls className={currSing.audio2.trim() ? null : classes.mediaHidden}
                        src={currSing.audio2} type="audio/mpeg" />
                    <p>{currSing.audio_name3}</p>
                    <audio controls className={currSing.audio3.trim() ? null : classes.mediaHidden}
                        src={currSing.audio3} type="audio/mpeg" />
                </div>
                <div className={[
                    classes.videoBlock,
                    currSing.video1.trim() ? null : classes.mediaHidden].join(' ')
                }>
                    <p>{currSing.video_name1}</p>
                    <video className={currSing.video1.trim() ? null
                        : classes.mediaHidden} src={currSing.video1}
                        id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                    <p>{currSing.video_name2}</p>
                    <video className={currSing.video2.trim() ? null : classes.mediaHidden} src={currSing.video2} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                    <p>{currSing.video_name3}</p>
                    <video className={currSing.video3.trim() ? null : classes.mediaHidden}
                        src={currSing.video3} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                </div>
            </div>
        )
    );
}

export default ListContent