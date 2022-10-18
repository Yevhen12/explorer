import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native'

const Article = ({ route }) => {

    const { item } = route.params
    console.log(item.urlToImage)
    return (
        <SafeAreaView style={styles.article_block}>
            <Text style={styles.title}>{item.title}</Text>
            <SafeAreaView style={styles.imageWrapper}>
                <Image
                    style={styles.img}
                    source={{ uri: item.urlToImage }}
                    resizeMode='contain'
                />
            </SafeAreaView>
            <Text style={styles.description}>{item.description}</Text>
            <SafeAreaView style={styles.about_block}>
                <Text style={styles.author_source}>{item.author}</Text>
                <Text style={styles.italic}>Source:
                    <Text style={styles.author_source}>{item.source.name}</Text>
                </Text>
            </SafeAreaView>
            <Text style={styles.date}>{item.publishedAt}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    article_block: {
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    imageWrapper: {
        height: 230
    },
    img: {
        height: '100%',
        width: null,
    },
    about_block: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    author_source: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize:16,
    },
    date: {
        marginTop: 20,
        textAlign: 'right',
        fontStyle:'italic',
    },
    italic: {
        fontStyle:'italic'
    }
})

export default Article