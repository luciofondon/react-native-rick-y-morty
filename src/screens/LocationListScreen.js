import React, { useEffect, useState } from 'react';
import List from '../components/List';

const LocationListScreen = ({ navigation }) => {
    const [locations, setLocations] = useState({});

    const getLocations = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/location');
            const json = await response.json();
            let locationFormat = [];
            json.results.forEach(element => {
                locationFormat.push({
                    id: element.id,
                    head: element.type,
                    body: element.name,
                    footer: element.dimension
                });
            });

            console.log(locationFormat);
            setLocations(locationFormat);
        } catch (error) {
            console.error(error);
        }
    };

    const showDetailLocation = (id, title) => {
        navigation.navigate('LocationDetail', { locationId: id, title });
    };

    useEffect(() => {
        getLocations();
    }, []);

    return <List data={locations} onClickItem={showDetailLocation} />;
};

export default LocationListScreen;
