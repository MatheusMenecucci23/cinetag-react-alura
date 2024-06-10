
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from './Inicio.module.css';
import { useEffect, useState } from "react";



function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/matheusmenecucci23/cinetag-api/db')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados); // Log the response from the API
                setVideos(dados.videos); // Assuming 'videos' is the array key in your API response
            })
            .catch(error => {
                console.error('Error fetching videos:', error); // Log any errors that occur during fetch
            });
    }, []);

    console.log(videos); // Log the current value of 'videos' after setting the state


    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>

                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;