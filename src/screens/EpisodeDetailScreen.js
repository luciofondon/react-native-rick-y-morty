import React, { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import FormComment from '../components/FormComment';

const EpisodeDetailScreen = ({ route }) => {
    const [episode, setEpisode] = useState({});
    const [characters, setCharacters] = useState([]);
    const { episodeId } = route.params;

    const getEpisode = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
            const json = await response.json();
            console.log(json);
            setEpisode({ episode: json.episode, airDate: json.air_date });
            let charactersImages = [];
            for (const url of json.characters) {
                const response = await fetch(url);
                const json = await response.json();
                charactersImages.push({ image: json.image, name: json.name });
            }
            setCharacters(charactersImages);
        } catch (error) {
            console.error(error);
        }
    };

    const postComment = async (data = {}) => {
        console.log(data);
        try {
            const response = await fetch('https://url.com/api/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            //TODO: Interpretar respuesta
            //response.json();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getEpisode();
    }, []);

    
    return (
        <>
            <Detail images={characters} title={episode.episode} description={episode.airDate} />
            <FormComment postComment={postComment} />
        </>
    );
};

export default EpisodeDetailScreen;
