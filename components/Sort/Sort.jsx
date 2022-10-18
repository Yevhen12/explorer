import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import ReusebleModal from '../ReusebleModal'
import { setSort } from '../../redux/slices/filterSlice'

const Sort = () => {

    const [activeModal, setActiveModal] = useState(false)
    const sort = useSelector(state => state.filterSlice.sort)
    const sortArray = ['publishedAt', 'relevancy', 'popularity']

    return (
        <SafeAreaView style={styles.border}>
            <TouchableOpacity onPress={() => setActiveModal(true)}>
                <Text style={styles.text}>{sort} ▼</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={activeModal}
                onRequestClose={() => setActiveModal(false)}
            >
                <ReusebleModal
                    setActiveModal={setActiveModal}
                    data={sortArray}
                    setAction={setSort}
                    heigth={160}
                    isTime={false}
                />
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        fontSize: 16,
    }
})

export default Sort