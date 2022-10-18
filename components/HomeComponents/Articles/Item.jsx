import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Item = ({ item }) => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Article', { item: item })}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: 'white',
        margin: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 10,
    },
})

export default Item