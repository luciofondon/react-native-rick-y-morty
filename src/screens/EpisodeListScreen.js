import React, { useEffect, useState } from 'react';
import List from '../components/List';

const EpisodeListScreen = ({ navigation }) => {
    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/episode');
            const json = await response.json();
            let episodesFormat = [];
            json.results.forEach(element => {
                episodesFormat.push({
                    id: element.id,
                    head: element.episode,
                    body: element.name,
                    footer: element.air_date
                });
            });
            setEpisodes(episodesFormat);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getEpisodes();
    }, []);

    const showDetailEpisode = (id, title) => {
        navigation.navigate('EpisodeDetail', { episodeId: id, title });
    };

    return <List data={episodes} onClickItem={showDetailEpisode} />;
};

export default EpisodeListScreen;
