import React  from 'react'
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import getArrayDate from '../../helpers/getArrayDate'
import uuid from 'react-native-uuid';

const ReusebleModal = ({ setActiveModal, data, heigth, setAction, isTime }) => {

    const dispatch = useDispatch()

    const hendleOptions = (item) => {

        if(isTime) {
            const timaArray = getArrayDate()
            const neededElem = timaArray.find(el => el.name === item)

            dispatch(setAction(neededElem))
        } else {
            dispatch(setAction(item))
        }
        
        setActiveModal(false)
    }
    const WIDTH = Dimensions.get('window').width


    return (
        <TouchableOpacity onPress={() => setActiveModal(false)} style={styles.container}>
            <SafeAreaView style={[styles.modal, { width: WIDTH - 20, height: heigth }]}>
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => hendleOptions(item)} key={uuid.v4()}>
                            <Text style={styles.text}>{item}</Text>
                        </TouchableOpacity>
                    )
                    }
                />
            </SafeAreaView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'

    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    list: {
        flex: 1,
    }
})

export default ReusebleModal