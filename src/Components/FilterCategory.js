import React, { useState, useMemo } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';


function Item(props) {
    return (
        <View style={styles.item}>
            <Text>{props.item.id}: {props.item.Title} ({props.item.Status})</Text>
        </View>
    );
}


function FilterCategory() {
    const [fullList, setFullList] = useState([
        { "id": 28, "Title": "Sweden", "Status": 1 },
        { "id": 56, "Title": "USA", "Status": 1 },
        { "id": 83, "Title": "England", "Status": 1 },
        { "id": 34, "Title": "England", "Status": 2 },
        { "id": 54, "Title": "England", "Status": 2 },
        { "id": 89, "Title": "England", "Status": 3 }
    ]);

    const [status, setStatus] = useState('NONE')

    const filteredList = useMemo(
        () => {
            if (status === 'NONE') return fullList
            return fullList.filter(item => status === item.Status)
        },
        [status, fullList]
    )
    const onClick = (status) => () => {
        setStatus(status)
    }
    return (
        <View style={styles.container}>
            <Text>Selected Status: {status}</Text>
            <View style={styles.filterBar}>
                <Button title="Clear" onPress={onClick('NONE')} />
                <Button title="Status 1" onPress={onClick(1)} />
                <Button title="Status 2" onPress={onClick(2)} />
                <Button title="Status 3" onPress={onClick(3)} />
            </View>
            <FlatList
                style={styles.list}
                renderItem={Item}
                keyExtractor={(item) => item.id}
                data={filteredList}
            />
        </View>
    );
}

export default FilterCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor: 'white',
    },
    list: {
        height: '100%',
        width: '100%'
    },
    filterBar: {
        flexDirection: 'row',
        // flex: 0.2,
        height: 40,
    },
    item: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8,
        backgroundColor: 'white',
    }
});