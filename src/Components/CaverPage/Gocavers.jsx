import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './CaverPage.module.css'
// import {useQuery}  from '@tanstack/react-query'
import Img from '../Img';
import Loader from '../UI/Loader/Loader';
// import Papa from "papaparse";
// const fetchSheets = () => {
//     Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRZt6Aq4b7BblAMH0dd0conRzDqtNsEeG0-cEVq1cYfrq6v-AdjeqEeWB-C6pcLVt8PEwQtzaEYJ4D2/pub?output=csv",
//     {
//      download: true,
//      header: true,
//      complete: (results) => {
//         console.log(results.data)
//        return results.data
       
//      }
//    })
//  }
   
// const fetchPost =   () => {
    
//     const url = `https://api.jsonbin.io/v3/b/63b4278c15ab31599e2b3846`;
//     const config = {
//       headers: {
//           'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
//       }
//     }
//     return fetch(url, config).then((res) => {
//         const result = res.json();
//         // console.log({result});
//         return result;
//     });
// }

export default function Gocavers ({ songs, songError, isSongsLoading }) {
    
    const navigate = useNavigate();
<<<<<<< HEAD
    // const { status, data: songs, isFetching, error } = useQuery(['new_year'], fetchPost);
=======
    // const { status, data: songs, isFetching, error } = useQuery(['new_year'], fetchPost );
>>>>>>> 57011d6b2c593d3a20ce3306d67cae113b53e5c2

    const { status, data: songs, isFetching, error } = useQuery(['new_year'], fetchPost, {staleTime: 60000}, {cacheTime: 1000 * 60 * 60}, {refetchOnWindowFocus: false}, {enabled: false}, {retry: false});
    // console.log("query", results.data)
    // const songs = results.data;
    if (isSongsLoading) {
        return <Loader/>
    }
    
    // if (status === 'error') {
    //     return <h1 style={{ backgroundColor: "white", color: "black" }}>Ошибка загрузки {error.message}</h1>
    // }
  return ( 
    // <h1>Каверы исполнителей!</h1>
       songs.map((caver) => (
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
//   {isFetching && <p>Обновление данных...</p>}
}

