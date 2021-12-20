import React from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Item = ({ head, body, footer, id, onClickItem }) => (
    <TouchableWithoutFeedback onPress={() => onClickItem(id, body)}>
        <View style={styles.item}>
            <Text style={styles.head}>{head}</Text>
            <Text style={styles.body}>{body}</Text>
            <Text style={styles.footer}>{footer}</Text>
        </View>
    </TouchableWithoutFeedback>
);

const List = ({ data, onClickItem }) => {
    const seperator = () => <View style={styles.seperator} />;

    const renderItem = ({ item }) => <Item {...item} {...{ onClickItem }} />;
    return (
        <FlatList {...{ data }} {...{ renderItem }} keyExtractor={item => item.id} ItemSeparatorComponent={seperator} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        marginVertical: 12,
        marginHorizontal: 16
    },

    head: {
        color: 'gray',
        fontSize: 12
    },
    body: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer: {
        color: 'gray',
        fontSize: 12
    },
    seperator: {
        height: 1,
        backgroundColor: '#aba7a7'
    }
});

export default List;
