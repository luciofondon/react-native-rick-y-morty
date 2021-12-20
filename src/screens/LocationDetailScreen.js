import React, { useEffect, useState } from 'react';
import Detail from '../components/Detail';

const EpisodeDetailScreen = ({ route }) => {
    const [location, setLocation] = useState({});
    const [residents, setResidents] = useState([]);
    const { locationId } = route.params;

    const getLocation = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
            const json = await response.json();
            setLocation({ name: json.name, dimension: json.dimension });
            let residentsImages = [];
            for (const url of json.residents) {
                const response = await fetch(url);
                const json = await response.json();
                residentsImages.push({ image: json.image, name: json.name });
            }
            setResidents(residentsImages);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return <Detail images={residents} title={location.name} description={location.dimension} titleImage="Habitantes" />;
};

export default EpisodeDetailScreen;
