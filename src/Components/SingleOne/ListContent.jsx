import React from 'react'
import { useParams } from "react-router";
import classes from './SingleOne.module.css'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import RoundLoader from '../UI/Loader/RoundLoader';
import Img from '../Img';
const fetchPost = () => {

    const url = `https://api.jsonbin.io/v3/b/639c448d01a72b59f2321459`;
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
    const { status, data: songs, isFetching, error } = useQuery(['639c448d01a72b59f2321459'], fetchPost, { staleTime: 60000 }, { cacheTime: 1000 * 60 * 60 }, { refetchOnWindowFocus: false }, { enabled: false }, { retry: 1 });
    if (status === 'loading') {
        return <RoundLoader />
    }

    if (status === 'error') {
        return <h1 style={{ backgroundColor: "white", color: "black" }}>Ошибка загрузки {error.message}</h1>
    }
    const currSings = songs.record.cavers.filter(songs => songs.id === params.id);
    
    return (

        currSings.map((currSing) =>
            <div className={classes.mediaSong} key={currSing.id.toString()}>
                <img className={classes.mediaImage} src={currSing.photo} width={80} alt={currSing.name} />
                {/* <Img className={classes.mediaImage} imgUrl={currSing.photo} width={80}  imgAlt={currSing.name} /> */}
                <div className={classes.headerSong}>
                    <h2>{currSing.name}</h2></div>
                <a className={[classes.linkTo, currSing.linkTo.trim() ? '' : classes.mediaHidden].join(' ')} href={currSing.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                <div className={[
                    classes.videoBlock,
                    currSing.video1.trim() ? null : classes.mediaHidden].join(' ')
                }>
                    {/* <p>{currSing.video_name1}</p> */}
                    {/* <ReactPlayer className={currSing.video1 ? '': classes.mediaHidden}
                    id= {classes.videoFrame} url = {currSing.video1} id= {classes.videoFrame}  /> */}
                    <p>{currSing.video_name1}</p>
                    <video className={currSing.video1.trim() ? null
                        : classes.mediaHidden} src={currSing.video1}
                        id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                    <p>{currSing.video_name2}</p>
                    {/* <div className={[classes.videoEdge, currSing.video1.trim() ? null : classes.mediaHidden].join(' ')} >
                     <iframe width="100%" height="100%" src={currSing.video1}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
                    </div> */}
                    {/* <ReactPlayer className={currSing.video2 ? '': classes.mediaHidden} id={classes.videoFrame} url = {currSing.video2}  controls={true} /> */}
                    <video className={currSing.video2.trim() ? null : classes.mediaHidden} src={currSing.video2} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                    <p>{currSing.video_name3}</p>
                    {/* <ReactPlayer className={currSing.video3 ? '': classes.mediaHidden} id={classes.videoFrame} url = {currSing.video3} controls={true} /> */}
                    {/* <video className={currSing.video3 ? '': classes.mediaHidden} src={currSing.video3} id = {classes.videoFrame} controls={true} ></video> */}
                    <video className={currSing.video3.trim() ? null : classes.mediaHidden} src={currSing.video3} id={classes.videoFrame} controls={true} type="video/mp4" ></video>

                </div>
                <div className={[
                    classes.audioBlock,
                    currSing.audio1.trim() ? null : classes.mediaHidden].join(' ')
                }>
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
                <div className={[classes.tziTata, currSing.picture_tzitata.trim() ? null : classes.mediaHidden].join(' ')}>
                    <img className={classes.tziImage} src={currSing.picture_tzitata} width={80} alt="Цитаты" />
                </div>

            </div>
        )
    );
}

export default ListContent