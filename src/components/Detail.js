import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const Detail = ({ title, description, titleImage = 'Personajes', images }) => {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.circleImage} />
            <Text style={styles.descriptionImage}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            {images.length > 0 && (
                <>
                    <Text style={styles.titleImages}>{titleImage}</Text>
                    <View style={styles.containerImages}>
                        <FlatList horizontal={true} data={images} {...{ renderItem }} keyExtractor={item => item.id} />
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        color: '#A29D9D'
    },
    titleImages: {
        paddingTop: 15
    },
    imageContainer: {
        alignItems: 'center'
    },
    circleImage: {
        width: 70,
        height: 70,
        borderRadius: 400 / 2
    },
    descriptionImage: {
        fontSize: 10
    },
    containerImages: {
        paddingTop: 10,
        width: '100%'
    }
});

export default Detail;
