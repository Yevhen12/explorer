import React from 'react'
import Sort from '../Sort/Sort'
import ListItems from './Articles/ListItems'
import FilterByTime from '../FilterByTime/FilterByTime'
import Search from '../Search/Search'
import { StyleSheet, SafeAreaView } from 'react-native'

const HomeMain = () => {

    return (
        <>
            <SafeAreaView style={styles.filterContainer}>
                <Sort />
                <FilterByTime />
            </SafeAreaView>
            <Search />
            <ListItems />
        </>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default HomeMain