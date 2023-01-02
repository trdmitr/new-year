import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './CaverPage.module.css'
import {useQuery}  from '@tanstack/react-query'
import Img from '../Img';
import Loader from '../UI/Loader/Loader';
const fetchPost =   () => {
    
    const url = `https://api.jsonbin.io/v3/b/639c448d01a72b59f2321459`;
    const config = {
      headers: {
          'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
      }
    }
    return fetch(url, config).then((res) => {
        const result = res.json();
        // console.log({result});
        return result;
    });
}
export default function Gocavers () {
    const navigate = useNavigate();
    const { status, data: songs, isFetching, error } = useQuery(['639c448d01a72b59f2321459'], fetchPost, {staleTime: 60000}, {cacheTime: 1000 * 60 * 60}, {refetchOnWindowFocus: false}, {enabled: false}, {retry: 1});
    // console.log("query", songs.record.cavers)
    if (status === 'loading') {
        return <Loader/>
    }
    
    if (status === 'error') {
        return <h1 style={{ backgroundColor: "white", color: "black" }}>Ошибка загрузки {error.message}</h1>
    }
  return ( 
    // <h1>Каверы исполнителей!</h1>
       songs.record.cavers.map((caver) => (
            <div className={classes.col} key={caver.id.toString()} onClick={() => navigate(`/cavers/${caver.id}`)}>
               {/* {status === 'loading' ? <Loader/>:} */}
               <div className={classes.item}>
               {/* <img src={caver.photo} alt={caver.name} /> */}
                    {/* <img src={caver.photo} alt={caver.name} /> */}
                    <Img imgUrl={caver.photo} imgAlt={caver.name} />
                </div>
                
                <p>{caver.name}</p>
            </div>
            
        ))
        
  )
  {isFetching && <p>Обновление данных...</p>}
}

