import React from 'react'
import { useState } from "react";
import classes from './PlayList.module.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
// import Loader from '../UI/Loader/Loader';
// const queryClient = new QueryClient();
const Player = () => {
    // const [data, setData] = useState({});
    const [trackIndex, setTrackIndex] = useState(0);
    const fetchPost = () => {

        const url = `https://api.jsonbin.io/v3/b/63b4506e15ab31599e2b594b`;
        const config = {
            headers: {
                'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
            }
        }
        return fetch(url, config).then((res) => {
            const result = res.json();
            // console.log({ result });
            return result;
        });

        // setData(response.data.record.cavers)
        // return response.data.record;

    }

    const { status, data: query, isFetching, error } = useQuery(['new_year2'], fetchPost, { staleTime: 60000 }, { cacheTime: 1000 * 60 * 60 }, { refetchOnWindowFocus: false }, { enabled: false }, { retry: 3 });
    if (status === 'loading')
        return <>loading...</>;

    if (status === 'error')
        return <h1 style={{ backgroundColor: "black" }}>Ошибка загрузки {error.message}</h1>;

    const audioList = query.record;
    // const songs = audioList
    // console.log('audioList ', audioList);
    // console.log("query.data", query)
    // const audiosongs1 = songs.map((song) => {
    //     const container = {};
    //     container.name = song.name;
    //     container.src = song.audio1;
    //     container.aud_name = song.audio_name1;
    //     return container;
    // }
    // )
    // const audiosongs2 = songs.map((song) => {
    //     const container = {};
    //     container.name = song.name;
    //     container.src = song.audio2;
    //     container.aud_name = song.audio_name2;
    //     return container;
    // }
    // )
    // const audiosongs3 = songs.map((song) => {
    //     const container = {};
    //     container.name = song.name;
    //     container.src = song.audio3;
    //     container.aud_name = song.audio_name3;
    //     return container;
    // }
    // )
    // const audioList2 = [...audiosongs1, ...audiosongs2, ...audiosongs3]
    //     .filter(e => e.src !== '');
    // console.log('audioList ', audioList2);

    // const [loaded, setLoaded] = useState(false)

    //  useEffect(() => {
    //     localStorage.setItem("audioList", JSON.stringify(audioList))

    //   }, [audioList]);
    //   const [mp3, setMp3] = useState({});
    //  useEffect(() => {
    //     if (loaded) return ;
    //     setMp3(
    //         JSON.parse(localStorage.getItem("audioList"))
    //     ) 
    //     setLoaded(true)
    //   },[loaded]);
    //    console.log("mp3", mp3)


    // const mapUsersByFields = (fields) => songs.map(u1 => fields.reduce((u2, f1) => {
    //     u2[f1] = u1[f1];
    //     return u2;
    // }, {}));

    // const aud1 = mapUsersByFields(["name", "audio1"].filter(e => e.audio1 !== ""));
    // const aud2 = mapUsersByFields(["name", "audio2"].filter(e => e.audio2 !== ''));
    // const aud3 = mapUsersByFields(["name", "audio3"].filter(e => e.audio3 !== ''));

    // function mapSongsFields(fields) {
    //     let isActiveUsers = [];
    //     for (let fromUser of songs) {
    //         let song = {};
    //         for (let field of fields)
    //             song[field] = fromUser[field];
    //         isActiveUsers.push(song);
    //     }
    //     return isActiveUsers;
    // }
    // const aud4 = mapSongsFields(["name", "audio1"]);
    // const aud5 = mapSongsFields(["name", "audio2"]);
    // const aud6 = mapSongsFields(["name", "audio3"]);
    //  const musicTracks2 = [...aud4, ...aud5, ...aud6].filter(e => e.audio1 !== "" && e.audio2 !== '' && e.audio3 !== '' );
    //   console.log ("musicTracks2" , musicTracks2)

    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? audioList.length - 1 : currentTrack - 1
        );
    };
    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < audioList.length - 1 ? currentTrack + 1 : 0
        );
    };
    return (

        <div className={classes.player}>
            <h1>Нонстоп Трибьюта!</h1>
            <AudioPlayer className={classes.rap_container}
                // style={{ width: "300px" }}
                style={{ borderRadius: "1rem", fontSize: "2em" }}
                // autoPlay
                // layout="horizontal"
                src={audioList[trackIndex].src}
                // onPlay={(e) => console.log("onPlay")}
                showSkipControls={true}
                showJumpControls={false}
                header={`Сейчас играет: ${audioList[trackIndex].name}`}
                footer={`${audioList[trackIndex].aud_name}`}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
            // other props here
            />
        </div>
    )
}

export default Player