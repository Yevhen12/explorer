import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import ReusebleModal from '../ReusebleModal'
import { setTime } from '../../redux/slices/filterSlice'
import getArrayDate from '../../helpers/getArrayDate'

const FilterByTime = () => {

    const [activeModal, setActiveModal] = useState(false)
    const time = useSelector(state => state.filterSlice.time)
    const timeArray = getArrayDate()
    const modifiedArray = timeArray.map(el => el.name)


    return (
        <SafeAreaView style={styles.border}>
            <TouchableOpacity onPress={() => setActiveModal(true)}>
                <Text style={styles.text}>{(time.name === 'All time') ? 'Select time' : time.name} ▼</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={activeModal}
                onRequestClose={() => setActiveModal(false)}
            >
                <ReusebleModal
                    setActiveModal={setActiveModal}
                    data={modifiedArray}
                    setAction={setTime}
                    heigth={310}
                    isTime={true}
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

export default FilterByTime