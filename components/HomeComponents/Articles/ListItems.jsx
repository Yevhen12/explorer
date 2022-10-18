import React from 'react'
import { VirtualizedList, SafeAreaView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Item from './Item'
import uuid from 'react-native-uuid';


const ListItems = () => {

    const listArticles = useSelector(state => state.articleSlice.articles)
    console.log(listArticles)

    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                initialNumToRender={8}
                style={styles.list}
                data={listArticles}
                renderItem={({ item }) => <Item item={item} />}
                getItemCount={() => listArticles.length}
                getItem={(data, idx) => data[idx]}
                keyExtractor={() => uuid.v4()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    list: {
        flex: 1,
    }
})

export default React.memo(ListItems)